import BannerSlider from "./BannerSlider"
import Categories from "./Categories"
import FeaturedBestseller from "./FeaturedBestseller"
import PickedByReaders from "./pickedByReaders"

const home = () => {
  return (
    <div>
     <BannerSlider></BannerSlider>
     <Categories></Categories>
     <PickedByReaders></PickedByReaders>
     <FeaturedBestseller></FeaturedBestseller>
    </div>
  )
}

export default home
