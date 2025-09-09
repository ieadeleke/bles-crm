import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="hero pt-32">
        <div className="w-[50%] mx-auto">
          <h1 className="text-black text-6xl text-center font-bold mb-3 leading-[1.2]">
            Smarter CRM, Stronger Sustainable Sales.
          </h1>
          <p className="text-sm text-center leading-loose w-[80%] mx-auto text-black mb-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
            aliquam vero dignissimos quia minima sed aliquid natus quos
            quibusdam inventore delectus ipsum consectetur, provident ab alias.
            Possimus, est provident. Dolores?
          </p>
          <Link
            href="/"
            className="bg-black py-5 px-7 text-sm text-white rounded-full flex items-center w-max gap-2 mx-auto"
          >
            Get Started
            <FaArrowRightLong className="text-lg" />
          </Link>
        </div>
      </div>
      <section className="px-20 mt-24">
        <div className="grid grid-cols-2 items-center gap-32">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="size-2 bg-black rounded-full"></div>
              <p className="text-sm text-black">Order Analysis</p>
            </div>
            <h3 className="text-4xl text-black leading-[1.3]">
              Selling Digital <br /> Products is Easier
            </h3>
          </div>
          <div>
            <p className="text-sm leading-loose text-black mb-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              optio officiis at iste quaerat praesentium quas totam perferendis
              nisi qui culpa delectus inventore aperiam quam, voluptates ullam
              accusamus explicabo voluptatem!
            </p>
            <Link
              href="/"
              className="bg-black py-4 px-7 text-sm text-white rounded-full flex items-center w-max gap-2"
            >
              Get Started
              <FaArrowRightLong className="text-lg" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_1.3fr] gap-5 mt-10">
          <div className="h-[24rem] rounded-[32px] bg-white border-2 border-solid border-[#ECECEC]"></div>
          <div className="h-[24rem] rounded-[32px] bg-white border-2 border-solid border-[#ECECEC]"></div>
        </div>
      </section>
      <div className="bg-black h-[50rem] mt-24"></div>
      <section className="px-20 mt-24">
        {/* <div className="rounded-[32px] bg-white px-32 py-20 border-2 border-solid border-[#ECECEC]"> */}
        <div className="grid grid-cols-2 gap-16">
          <div>
            <div className="h-full rounded-[32px] bg-white border-2 border-solid border-[#ECECEC]"></div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="size-2 bg-black rounded-full"></div>
              <p className="text-sm text-black">Order Analysis</p>
            </div>
            <h3 className="text-3xl text-black font-semibold leading-[1.5] mb-6 w-[80%]">
              What can our CRM Sales do for you to help you out?
            </h3>
            <div className="flex gap-3 mb-5">
              <div>
                <div className="size-9 rounded-full bg-[#FEC27E]"></div>
              </div>
              <div>
                <h4 className="text-lg text-black mb-2">
                  Better Lead Management
                </h4>
                <p className="w-[80%] text-sm leading-loose text-black mb-4 opacity-70">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit optio officiis at iste quaerat praesentium quas totam.
                </p>
              </div>
            </div>
            <div className="flex gap-3 mb-5">
              <div>
                <div className="size-9 rounded-full bg-[#FEC27E]"></div>
              </div>
              <div>
                <h4 className="text-lg text-black mb-2">
                  Better Lead Management
                </h4>
                <p className="w-[80%] text-sm leading-loose text-black mb-4 opacity-70">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit optio officiis at iste quaerat praesentium quas totam.
                </p>
              </div>
            </div>
            <div className="flex gap-3 mb-4">
              <div>
                <div className="size-9 rounded-full bg-[#FEC27E]"></div>
              </div>
              <div>
                <h4 className="text-lg text-black mb-2">
                  Better Lead Management
                </h4>
                <p className="w-[80%] text-sm leading-loose text-black mb-4 opacity-70">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit optio officiis at iste quaerat praesentium quas totam.
                </p>
              </div>
            </div>
            <Link
              href="/"
              className="bg-black py-5 px-7 text-sm text-white rounded-full flex items-center w-max gap-2"
            >
              Get Started
              <FaArrowRightLong className="text-lg" />
            </Link>
          </div>
        </div>
      </section>
      <section className="px-20 mt-24">
        {/* <div className="rounded-[32px] bg-white px-32 py-20 border-2 border-solid border-[#ECECEC]"> */}
        <div className="grid grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl text-black font-semibold leading-[1.5] mb-6 w-[80%]">
              Frequently Asked <br /> Questions about Memento
            </h3>
            <Link
              href="/"
              className="bg-black py-5 px-7 text-sm text-white rounded-full flex items-center w-max gap-2"
            >
              Get Started
              <FaArrowRightLong className="text-lg" />
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white shadow-lg faq py-5 px-6">
              <div className="faq__header flex items-center justify-between mb-4">
                <h4 className="text-lg text-black">Who can open a Silento</h4>
                <IoIosArrowUp className="text-black text-2xl" />
              </div>
              <div className="faq__body">
                <p className="text-sm leading-loose text-black opacity-80">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  sed soluta voluptatem consequuntur quod! Ab, sit pariatur, eos
                  aspernatur incidunt iusto cupiditate facere labore delectus
                  quidem libero. Nulla, quod corrupti. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Vero sed soluta.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg faq pt-6 pb-5 px-6">
              <div className="faq__header flex items-center justify-between">
                <h4 className="text-lg text-black">Who can open a Silento</h4>
                <IoIosArrowDown className="text-black text-2xl" />
              </div>
            </div>
            <div className="bg-white shadow-lg faq pt-6 pb-5 px-6">
              <div className="faq__header flex items-center justify-between">
                <h4 className="text-lg text-black">Who can open a Silento</h4>
                <IoIosArrowDown className="text-black text-2xl" />
              </div>
            </div>
            <div className="bg-white shadow-lg faq pt-6 pb-5 px-6">
              <div className="faq__header flex items-center justify-between">
                <h4 className="text-lg text-black">Who can open a Silento</h4>
                <IoIosArrowDown className="text-black text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
