import './index.css'

const BannerCadItem = Props => {
  const {bannerDetails} = Props
  const {TextHeader, description, button} = bannerDetails

  return (
    <li className="banner-card-item">
      <div>
        <h1 className="textHeader">{TextHeader}</h1>
        <p className="description">{description}</p>
        <button className="buttonContainer" type="button">
          show more
        </button>
      </div>
    </li>
  )
}

export default BannerCadItem
