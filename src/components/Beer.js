const Beer = (props) => {

  const {
    image,
    name,
    tagline,
    first_brewed,
    attenuation_level,
    description,
    contributed_by} = props

    return (
      <div>
        <div>
          <img src={image} alt={name} style={{width: '200px', height: '400px', marginTop: '50px'}}/>
        </div>
        <div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
              <p style={{fontSize: '46px', fontWeight: 'bold'}}>{name}</p>
              <p style={{fontSize: '22px', color: 'gray'}}>{tagline}</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <p style={{fontSize: '40px', color: 'gray', fontWeight: 'bold'}}>{attenuation_level}</p>
              <p style={{fontSize: '16px', fontWeight: 'bold'}}>{first_brewed}</p>
            </div>
          </div>
          <div style={{marginTop: '8px', display: 'flex', flexDirection: 'column'}} >
            <p  style={{fontSize: '18px', fontWeight: 'bold'}}>{description}</p>
            <p  style={{fontSize: '14px', color: 'gray'}}>{contributed_by}</p>
          </div>
        </div>
      </div>

    )

}


export default Beer
