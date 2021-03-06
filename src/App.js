import { useState } from 'react';
const App = () => {
  const [value, setValue] = useState({
    normal: '',
    texto: '',
    select: '',
    check: false,
    estado: 'triste',
    estado2: ''
  });

  const handleChange = ({ target }) => {
    setValue({
      ...value,
      [target.name]
        : target.type === 'checkbox'
          ? target.checked : target.value
    })
  }
  console.log(value)
  return (
    <div>
      <input type="text" name="normal" value={value.normal} onChange={handleChange} />
      <textarea name='texto' value={value.texto} onChange={handleChange} />
      <select value={value.select} name="select" onChange={handleChange}>
        <option value='' >-- Seleccione --</option>
        <option value='feliz' >-- feliz --</option>
        <option value='triste' >-- tristeS --</option>
        <option value='enojado' >-- enojadoS --</option>
        <option value='amoroso' >-- amorosoS --</option>
      </select>
      <input
        type="checkbox"
        name="check"
        onChange={handleChange}
        checked={value.check}
      />
      <div onChange={handleChange}>
        <label>CHANCHO</label>
        <input name="estado2" type="radio" value="triste" />Triste
        <input name="estado2" type="radio" value="feliz" />Feliz
        <input name="estado2" type="radio" value="emocionado" />Emocionado
      </div>
      <div>
        <label>CHANCHO</label>
        <input onChange={handleChange} name="estado" type="radio" value="triste" checked={value.estado === "triste"}/>Triste
        <input onChange={handleChange} name="estado" type="radio" value="feliz" checked={value.estado === "feliz"}/>Feliz
        <input onChange={handleChange} name="estado" type="radio" value="emocionado" checked={value.estado === "emocionado"}/>Emocionado
      </div>


    </div>
  )
}

export default App;
