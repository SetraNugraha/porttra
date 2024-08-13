/* eslint-disable react/prop-types */
import { Header } from '../elements/Header'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import { useState, useRef } from 'react'

export default function ContactAddress({ contactInfo }) {
  const FormContact = () => {
    const serviceID = import.meta.env.VITE_SERVICE_ID
    const templateID = import.meta.env.VITE_TEMPLATE_ID
    const publicKEY = import.meta.env.VITE_PUBLIC_KEY
    const [processSend, setProcessSend] = useState(false)

    // Notif
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer
        toast.onmouseleave = Swal.resumeTimer
      },
    })

    const form = useRef()

    const sendEmail = (e) => {
      e.preventDefault()

      emailjs
        .sendForm(serviceID, templateID, form.current, {
          publicKey: publicKEY,
        })
        .then(setProcessSend(true))
        .then(
          () => {
            setTimeout(() => {
              console.log('SUCCESS!')
              Toast.fire({
                icon: 'success',
                title: 'Message sent successfully',
              })
              setProcessSend(false)
            }, 1000)
          },
          (error) => {
            console.log('FAILED...', error.text)
            setTimeout(() => {
              console.log('Error!')
              Toast.fire({
                icon: 'error',
                title: 'Error while sending message !',
              })
              setProcessSend(false)
            }, 1000)
          },
        )
        .then(form.current.reset())
    }

    const InputForm = ({ type, id, name, placeholder }) => {
      return (
        <input
          type={type}
          id={id}
          name={name}
          className="h-[35px] w-full border border-slate-500 rounded-md px-5 placeholder:font-semibold placeholder:text-[14px] focus:outline-none focus:border-[1px] focus:border-[#453ACE]"
          placeholder={placeholder}
          required
        />
      )
    }

    return (
      <form
        ref={form}
        onSubmit={sendEmail}
        className="my-5 flex flex-col gap-5"
      >
        {/* Name */}
        <InputForm
          type={'text'}
          id={'text'}
          name={'user_name'}
          placeholder={'Name'}
        />
        {/* Email */}
        <InputForm
          type={'email'}
          id={'email'}
          name={'user_email'}
          placeholder={'Email'}
        />
        {/* User Message */}
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          className="h-[120px] w-full border border-slate-500 rounded-md px-4 py-2 placeholder:font-semibold placeholder:text-[14px] focus:outline-none focus:border-[1px] focus:border-[#453ACE]"
          placeholder="Write a message"
          required
        />
        {/* Button */}
        <button
          type="submit"
          value="Send"
          className={`text-white text-[14px] font-semibold h-[35px] w-full bg-[#7e74f1] rounded-lg hover:bg-[#453ACE] ${processSend ? 'disabled:opacity-50 disabled:cursor-not-allowed' : ''}`}
          disabled={processSend}
        >
          {processSend ? 'Process Sending Message ...' : 'Submit'}
        </button>
      </form>
    )
  }

  return (
    <section
      className="px-5"
      id="contact"
    >
      <Header
        title={'FIND ME'}
        subTitle={'Contact & Address'}
        position={'center'}
      />

      <div className="xl:w-[55%] xl:mx-auto xl:flex xl:justify-center xl:gap-10 xl:items-start xl:mt-10">
        {/* Form  */}
        <div className="xl:w-[45%]">
          <FormContact />
        </div>

        {/* Address & Contact */}
        <div className="py-5 flex flex-col gap-10 || xl: ">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className="flex gap-5"
            >
              {/* Icon */}
              <div className="h-[55px] w-[55px] bg-slate-200 flex justify-center items-center rounded-lg">
                <img src={`assets/${contact.icon}`} />
              </div>
              {/* Info */}
              <div>
                <h4 className="font-bold text-stone-700">{contact.title}</h4>
                <p className="text-[14px] text-secondary">{contact.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
