import Image from 'next/image'
import React from 'react'

const Products = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>

                    <p className="mt-4 max-w-md text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                        dicta incidunt est ipsam, officia dolor fugit natus?
                    </p>
                </header>

                <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <li>
                        <a href="#" className="group block overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1602786195490-c785a218df40?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                width={1770}
                                height={1770}
                                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                            />

                            <div className="relative bg-white pt-3">
                                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                    Basic Tee
                                </h3>

                                <p className="mt-2">
                                    <span className="sr-only"> Regular Price </span>

                                    <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                </p>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="group block overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                width={1770}
                                height={1770}
                                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                            />

                            <div className="relative bg-white pt-3">
                                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                    Basic Tee
                                </h3>

                                <p className="mt-2">
                                    <span className="sr-only"> Regular Price </span>

                                    <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                </p>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="group block overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1567818735868-e71b99932e29?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                width={1770}
                                height={1770}
                                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                            />

                            <div className="relative bg-white pt-3">
                                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                    Basic Tee
                                </h3>

                                <p className="mt-2">
                                    <span className="sr-only"> Regular Price </span>

                                    <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                </p>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="group block overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                width={1770}
                                height={1770}
                                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                            />

                            <div className="relative bg-white pt-3">
                                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                    Basic Tee
                                </h3>

                                <p className="mt-2">
                                    <span className="sr-only"> Regular Price </span>

                                    <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Products