
const phone = import.meta.env.VITE_PHONE!
const email = import.meta.env.VITE_EMAIL!
export default function Contact() {
    return (
        <div className="border-b border-neutral-800 pb-4">

            <h1 className="font-thin text-4xl m-10 text-white text-center">
                Ready to Connect?
            </h1>

            <div className="font-thin text-center text-neutral-400">
                <h1>{phone}</h1>
                <h1>{email}</h1>
            </div>
        </div>
    )
}