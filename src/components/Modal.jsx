import hideModal from "../services/hideModal.js";

export const Modal = () => {
  return (
    <>
      <div id="modal" className="relative flex items-center justify-center">
        <div className="fixed flex items-center justify-center top-0 left-0 w-screen h-screen bg-black opacity-40 z-50"></div>

        <div className="flex flex-col items-center justify-center text-center lg:px-28 px-5 gap-5 normal-case fixed bg-white rounded-2xl h-[40vh] w-[80vw] lg:w-[40vw] top-[30%] z-50">
          <span className="uppercase font-extrabold">Privacidad</span>
          <span>
            No recopilamos información personal ni utilizamos cookies en nuestro
            sitio web. Tu privacidad es importante para nosotros.
          </span>

          <button
            onClick={hideModal}
            className="transition ease-in-out delay-400 hover:bg-[#181818] hover:text-white text-[12px] xl:text-[16px] max-w-40 xl:max-w-96 py-2 px-8 border text-[#181818] border-[#181818] rounded-full"
          >
            OK
          </button>
        </div>
      </div>
    </>
  );
};
