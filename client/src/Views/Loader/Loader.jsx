
import odin from './images/woden.gif'
import zombie from './images/zombie.gif'
import loadin from './images/loading.gif'
import './loader.css';

export default function Loader() {
  return (
    <div className="loader">
    <img className='image_container' src={odin} alt="loading"/>
    <h3><strong>LOADING . . .</strong></h3>
</div>
  );
}
