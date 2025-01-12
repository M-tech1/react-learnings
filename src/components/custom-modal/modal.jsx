import "./modal.css";
export default function Modal({ id, header, body, footer, onCloseValue }) {
  return (
    <div
      id={id || "Modal"}
      className="flex flex-col align-middle justify-center items-center"
    >
      <div className="content">
        <div className="flex flex-row justify-between bg-gray-700 font-xl text-white align-middle content-center">
          <h3 className="ml-[40%]">{header ? header : "Header"}</h3>
          <span
            onClick={onCloseValue}
            className="close-modal w-10 h-10 text-red-500 cursor-pointer"
          >
            &times;
          </span>
        </div>
        <div className="body my-8 w-[10rem] h-[3rem] border border-solid border-10px">
          {body ? (
            body
          ) : (
            <div>
              <p>modol main body component... </p>
            </div>
          )}
        </div>
        <div className="footer bg-black text-white flex justify-center align-middle ">
          {footer ? footer : "footer component"}
        </div>
      </div>
    </div>
  );
}
