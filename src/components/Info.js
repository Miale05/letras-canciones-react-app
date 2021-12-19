import React from 'react';
import PropTypes from 'prop-types';

const Info = ({info}) => {
    
    if(Object.keys(info).length === 0) return null;

    const { strArtistThumb, strArtistLogo, strGenre, strStyle, strCountry, strBiographyES, strBiographyEN, strWebsite, strFacebook, strTwitter } = info;

    var biografiadisponible;

    if(strBiographyES === null){
        biografiadisponible = strBiographyEN;
    } else {
        biografiadisponible = strBiographyES;
    }

    return ( 
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Información Artista
            </div>
            <div className="card-body">
                <img src={strArtistLogo} alt="Logo Artista" />
                <img src={strArtistThumb} alt="Logo Artista" />
                <p className="card-text font-weight-bold">Género: <span className="font-weight-light">{strGenre}</span> Estilo: <span className="font-weight-light">{strStyle}</span> País: <span className="font-weight-light">{strCountry}</span> </p>
                <h2 className="card-text">Biografía:</h2>
                <p className="card-text">{biografiadisponible}</p>
                <p className="card-text">
                    <a href={`https://${strWebsite}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-chrome"></i>
                    </a>
                    <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                                                            
                </p>
            </div>
        </div>
     );
}

Info.propTypes = {
    info: PropTypes.object.isRequired
}
 
export default Info;