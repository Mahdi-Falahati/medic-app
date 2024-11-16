import { FaArrowRightArrowLeft } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-green-600 text-white rounded-t-md p-4 font-semibold ">
      <div className="flex flex-wrap justify-around">
        <div>
          <h3 className="tracking-widest mb-3 text-xl">داروخانه همراه</h3>
          <p className="w-full md:w-[500px] lg:w-[750px] leading-6 font-normal text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می
          </p>
        </div>
        <ul className="flex flex-col md:list-disc flex-wrap sm:flex-row md:flex-col justify-around items-start mt-2">
          <li className="m-2">تعرفه های قانونی</li>
          <li className="m-2">دسترسی سریع</li>
          <li className="m-2">دارو های اورجینال</li>
          <li className="m-2">پزشکان متخصص</li>
        </ul>
      </div>

      <div className="mt-5 flex justify-center flex-col sm:flex-row">
        <a
          href="https://sarzaminhooshmand.com/"
          className="flex justify-around items-center mx-3 hover:no-underline underline"
        >
          بهینه سازان سرزمین هوشمند
        </a>
        <FaArrowRightArrowLeft />
        <a
          href="https://falahati-mahdi.vercel.app/"
          className="flex justify-around items-center mx-3 hover:no-underline underline"
        >
          مهدی فلاحتی
        </a>
      </div>
    </footer>
  );
}
