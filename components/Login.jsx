"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { CONSTANTS } from '@/utils/constants'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const Login = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/auth/login", {
                email: user.email,
                password: user.password
            });

            if (res.status === 200) {
                toast.success("Logged in successfully");
                router.push("/products");
            } else {
                toast.error("Invalid login");
            }
        } catch (error) {
            console.log(error);
            toast.error("An error occurred during login");
        }

    }
    return (
        <section className="bg-white">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                    <Image
                        width={870}
                        height={870}
                        alt="Pattern"
                        src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </aside>

                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">

                        <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                            Welcome to {CONSTANTS.NAME}
                        </h1>

                        <p className="mt-4 leading-relaxed text-gray-500">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                            quibusdam aperiam voluptatum.
                        </p>

                        <form onSubmit={handleLogin} className="mt-8 grid grid-cols-6 gap-6">


                            <div className="col-span-6">
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                                <input
                                    type="email"
                                    value={user.email}
                                    onChange={(e) => { setUser({ ...user, email: e.target.value }) }}
                                    id="Email"
                                    name="email"
                                    className="mt-1 py-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6 ">
                                <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

                                <input
                                    type="password"
                                    id="Password"
                                    name="password"
                                    value={user.password}
                                    onChange={(e) => { setUser({ ...user, password: e.target.password }) }}
                                    className="mt-1 py-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>



                            <div className="col-span-6">
                                <p className="text-sm text-gray-500">
                                    By creating an account, you agree to our
                                    <a href="#" className="text-gray-700 underline"> terms and conditions </a>
                                    and
                                    <a href="#" className="text-gray-700 underline">privacy policy</a>.
                                </p>
                            </div>

                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                >
                                    Login
                                </button>

                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    Don&apos;t have an account? {' '}
                                    <a href="/signup" className="text-gray-700 underline">Sign up</a>.
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Login