import { Link } from "react-router-dom";

export default function Entidade() {
  return (
    <div>
      <h2>registrar entidade</h2>
      <Link to="/">Home</Link>
      <hr />
      <input type="text" name="nome" placeholder="nome do usuário" />
      <br />
      <br />
      <input type="text" name="nif" placeholder="informe o nif a entidade" />
      <br />
      <br />
      <select>
        <optgroup>
          <option selected>tipo de entidade</option>
          <option value="pessoa">pessoa</option>
          <option value="empresa">empresa</option>
        </optgroup>
      </select>
    </div>

  )
}