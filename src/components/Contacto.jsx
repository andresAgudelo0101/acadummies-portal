import styles from "./Contacto.module.css";
function Contacto() {
  return (
    <div className="h-5/6 bg-black w-full flex justify-center items-center">
      <div className="flex flex-col gap-3 md:w-2/5 p-3">
        <h1 className={styles.title}>Contactanos</h1>
        <p className="text-lg font-extralight text-slate-50">
          Si estas interesado en adquirir el curso no dudes en contactarnos alli
          te explicaremos los pasos a seguir.
        </p>
        <div className="grid md:grid-cols-2 md:grid-rows-2 justify-center w-full h-auto md:h-52 gap-7">
          <div className="flex flex-row  gap-2 justify-start items-center  rounded-md border-b-2 border-b-gray-600 hover:border-gray-800 p-3  ">
            <div>
              <img src="./logos/wsp.png" className="w-11 hover:scale-125" />
            </div>
            <div>
              <a
                className="text-md font-normal text-slate-300 hover:text-green-800"
                href="https://api.whatsapp.com/send?phone=573108415549&text=Gracias%20por%20comunicarte%20con%20acadummies%F0%9F%98%89%F0%9F%91%8C"
                target="_blank"
              >
                {"(+57) 30108415549"}
              </a>
              <br></br>
              <a
                className="text-md font-normal text-slate-300 hover:text-green-800"
                href="https://api.whatsapp.com/send?phone=573216907872&text=Gracias%20por%20comunicarte%20con%20acadummies%F0%9F%98%89%F0%9F%91%8C"
                target="_blank"
              >
                {"(+57) 3216907872"}
              </a>
            </div>
          </div>

          <div className="flex flex-row  gap-2 justify-start items-center  rounded-md border-b-2 border-b-gray-600 hover:border-gray-800 p-3  ">
            <div>
              <img src="./logos/insta.png" className="w-11 hover:scale-125" />
            </div>
            <div>
              <a
                className="text-md font-normal text-slate-300 hover:text-pink-400"
                href="https://www.instagram.com/dummies.academy/"
                target="_blank"
              >
                {"dummies.academy"}
              </a>
            </div>
          </div>

          <div className="flex flex-row  gap-2 justify-start items-center  rounded-md border-b-2 border-b-gray-600 hover:border-gray-800 p-3  ">
            <div>
              <img src="./logos/gmail.png" className="w-11 hover:scale-125" />
            </div>
            <div className=" break-all">
              <a
                className="text-md font-normal text-slate-300 hover:text-red-600 "
                href="mailto:acadummiesbootcamp@gmail.com?cc=Información Curso Acadummies"
                target="_blank"
              >
               acadummiesbootcamp@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-row  gap-2 justify-start items-center  rounded-md border-b-2 border-b-gray-600 hover:border-gray-800 p-3  ">
            <div>
              <img src="./logos/face.png" className="w-11 hover:scale-125" />
            </div>
            <div className=" break-all">
              <a
                className="text-md font-normal text-slate-300 hover:text-blue-600 "
                href="https://www.facebook.com/profile.php?id=100087537554988"
                target="_blank"
              >
               Acadumies Boot Camp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
