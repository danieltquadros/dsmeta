import NotificationButton from "../NotificationButton";
import "./styles.css";

function SalesCard() {
  return (
    <div className="dsmetaCard">
      <h2 className="dsmetaSalesTitle">Vendas</h2>
      <div>
        <div className="dsmetaFormControlContainer">
          <input className="dsmetaFormControl" type="text" />
        </div>
        <div className="dsmetaFormControlContainer">
          <input className="dsmetaFormControl" type="text" />
        </div>
      </div>
      <div>
        <table className="dsmetaSalesTable">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">Data</th>
              <th>Vendedor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="show992">#341</td>
              <td className="show576">13/11/2022</td>
              <td>Anakin</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td>R$ 53000.00</td>
              <td>
                <div className="dsmetaRedBtnContainer">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#341</td>
              <td className="show576">13/11/2022</td>
              <td>Anakin</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td>R$ 53000.00</td>
              <td>
                <div className="dsmetaRedBtnContainer">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#341</td>
              <td className="show576">13/11/2022</td>
              <td>Anakin</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td>R$ 53000.00</td>
              <td>
                <div className="dsmetaRedBtnContainer">
                  <NotificationButton />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesCard;
