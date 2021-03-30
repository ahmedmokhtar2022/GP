/* ------ Style 👇---- */
import './css/App.css';
import './css/products.css';
/* ------ Icons 👇---- */
import { GrCart } from 'react-icons/gr';
import { BsHeart } from 'react-icons/bs';
/* ------ Images 👇---- */
import product_image from './images/ahmed2.jpg';


function Products() {
  return (
    <div>
      <div class="products_page_section_header">
      <h1 class="products_page_header">Products Page</h1>
      </div>
        <div class="products_container">
          <div class="product">
            
            <div class="product_top">
              <div class="product_image"><img src={product_image} class="product_img"></img></div>
            </div>

            <div class="product_body">
              <div class="product_name">Ahmed Mokhtar</div>
              <div class="product_description">Software Engineer Full stack Web Development.</div>
            </div>
            
            <div class="product_bottom">
              <div class="add_cart"><button class="buy_btn"><span class="buy_word">Buy</span><GrCart class="cart_icon"/></button></div>
              <div class="add_fav"><button class="fav_btn"><span class="fa_word">Favourite</span><BsHeart class="product_fav_icon"/></button></div>
            </div>
          </div>

          <div class="product">
            
            <div class="product_top">
              <div class="product_image"><img src={product_image} class="product_img"></img></div>
            </div>

            <div class="product_body">
              <div class="product_name">Ahmed Mokhtar</div>
              <div class="product_description">Software Engineer Full stack Web Development.</div>
            </div>
            
            <div class="product_bottom">
              <div class="add_cart"><button class="buy_btn"><span class="buy_word">Buy</span><GrCart class="cart_icon"/></button></div>
              <div class="add_fav"><button class="fav_btn"><span class="fa_word">Favourite</span><BsHeart class="product_fav_icon"/></button></div>
            </div>
          </div>
          <div class="product">
            
            <div class="product_top">
              <div class="product_image"><img src={product_image} class="product_img"></img></div>
            </div>

            <div class="product_body">
              <div class="product_name">Ahmed Mokhtar</div>
              <div class="product_description">Software Engineer Full stack Web Development.</div>
            </div>
            
            <div class="product_bottom">
              <div class="add_cart"><button class="buy_btn"><span class="buy_word">Buy</span><GrCart class="cart_icon"/></button></div>
              <div class="add_fav"><button class="fav_btn"><span class="fa_word">Favourite</span><BsHeart class="product_fav_icon"/></button></div>
            </div>
          </div>


        </div>


    </div>
  );
}

export default Products;
