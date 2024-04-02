import "./Main.modules.scss";

export default function Main() {
  return (
    <>
      <div className="main-div">
        <div className="main-box-div">
          <aside className="side-bar-div">
            <div className="mac-btn-div">
              <ul className="mac-btn-list">
                <li className="mac-btn-red"></li>
                <li className="mac-btn-yellow"></li>
                <li className="mac-btn-green"></li>
              </ul>
            </div>
          </aside>

          <div className="text-area-div">
            <h1>Meu notion</h1>
          </div>
        </div>
      </div>
    </>
  );
}
