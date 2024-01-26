import localFont from 'next/font/local';

const font = localFont({
  src: '../../common/fonts//creattion/Creattion.otf',
});

const Header = () => {
  return (
    <>
      <header className="w-full top-0 left-0 bg-white border-b border-slate-700 border-opacity-5 text-gray-800 px-[1rem] py-[.8rem]">
        <div className="text-[1.5rem] font-light tracking-wide text-center w-full flex-row flex justify-center items-center gap-[2rem]">
          <hr className="w-[8rem] opacity-90" />
          <h1 className={`${font.className} text-4xl`}>
            Matej Ludma
          </h1>
          <hr className="w-[8rem] opacity-90" />
        </div>
      </header>
    </>
  );
};

export default Header;
