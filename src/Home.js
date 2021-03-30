/* ------ Style 👇---- */
import './css/App.css';
import './css/home.css';
/* ------ Images 👇---- */
import post_user_img from './images/ahmed.jpg';
import post_user_img2 from './images/ahmed2.jpg';
import wallpaper from './images/bg3.jpg';
/* ------ Icons 👇---- */
import { FaRegHeart } from 'react-icons/fa';
import { BsReply } from 'react-icons/bs';



function Home() {
  return (
    
    <div>
      <div class="home_wallpaper"><img src={wallpaper} class="wallpaper_img"></img></div>


      <div class="home_header_div">
         <h1 class="home_header_h1">News Feed</h1>
      </div>

  
      <div class="posts-container">
        <div class="newsfeed_post">
          <div class="post_header">
            <div class="post_header_image_div">
              <img src={post_user_img} class="post_header_image"></img>
            </div>
            <div class="name_time_div_block">
            <div class="post_header_name">Ahmed Mokhtar</div>
            <div class="post_header_time">25/3/2021</div>
            </div>
          </div>

          <div class="post_body">
            <div class="body_text">Hellooos! Ahmed Mokhtar is Here </div>
             {/* <div class="post_body_image"><img src="#" class="post_image"></img></div>*/}
          </div>
          
          <div class="post_bottom">
            <div class="bottom_li post_comment">Reply< BsReply class="reply_icon" /> </div>
            <div class="bottom_li post_favour">favorite <FaRegHeart class="fav_icon"/></div>
          </div>

        </div>

       


        <div class="newsfeed_post">
          <div class="post_header">
            <div class="post_header_image_div">
              <img src={post_user_img} class="post_header_image"></img>
            </div>
            <div class="name_time_div_block">
            <div class="post_header_name">Ahmed Mokhtar</div>
            <div class="post_header_time">25/3/2021</div>
            </div>
          </div>

          <div class="post_body">
            <div class="body_text">Welcome Evereyone ! Ahmed Mokhtar is Here  </div>
           {/* <div class="post_body_image"><img src="#" class="post_image"></img></div>*/}
          </div>
          
          <div class="post_bottom">
            <div class="bottom_li post_comment">Reply< BsReply class="reply_icon" /> </div>
            <div class="bottom_li post_favour">favorite <FaRegHeart class="fav_icon"/></div>
          </div>

        </div>


        <div class="newsfeed_post">
          <div class="post_header">
            <div class="post_header_image_div">
              <img src={post_user_img} class="post_header_image"></img>
            </div>
            <div class="name_time_div_block">
            <div class="post_header_name">Ahmed Mokhtar</div>
            <div class="post_header_time">25/3/2021</div>
            </div>
          </div>

          <div class="post_body">
            <div class="body_text">Welcome Evereyone ! Ahmed Mokhtar is Here </div>
            <div class="post_body_image"><img src={post_user_img} class="post_image"></img></div>
          </div>
          
          <div class="post_bottom">
            <div class="bottom_li post_comment">Reply< BsReply class="reply_icon" /> </div>
            <div class="bottom_li post_favour">favorite <FaRegHeart class="fav_icon"/></div>
          </div>

        </div>
        <div class="newsfeed_post">
          <div class="post_header">
            <div class="post_header_image_div">
              <img src={post_user_img} class="post_header_image"></img>
            </div>
            <div class="name_time_div_block">
            <div class="post_header_name">Ahmed Mokhtar</div>
            <div class="post_header_time">25/3/2021</div>
            </div>
          </div>

          <div class="post_body">
            <div class="body_text">Hellooos! Ahmed Mokhtar is Here </div>
            {/* <div class="post_body_image"><img src="#" class="post_image"></img></div>*/}       
         </div>
          
          <div class="post_bottom">
            <div class="bottom_li post_comment">Reply< BsReply class="reply_icon" /> </div>
            <div class="bottom_li post_favour">favorite <FaRegHeart class="fav_icon"/></div>
          </div>

        </div>

        <div class="newsfeed_post">
          <div class="post_header">
            <div class="post_header_image_div">
              <img src={post_user_img} class="post_header_image"></img>
            </div>
            <div class="name_time_div_block">
            <div class="post_header_name">Ahmed Mokhtar</div>
            <div class="post_header_time">25/3/2021</div>
            </div>
          </div>

          <div class="post_body">
            <div class="body_text">Hellooos! Ahmed Mokhtar is Here </div>
             {/* <div class="post_body_image"><img src="#" class="post_image"></img></div>*/}
          </div>
          
          <div class="post_bottom">
            <div class="bottom_li post_comment">Reply< BsReply class="reply_icon" /> </div>
            <div class="bottom_li post_favour">favorite <FaRegHeart class="fav_icon"/></div>
          </div>

        </div>

        <div class="newsfeed_post">
          <div class="post_header">
            <div class="post_header_image_div">
              <img src={post_user_img} class="post_header_image"></img>
            </div>
            <div class="name_time_div_block">
            <div class="post_header_name">Ahmed Mokhtar</div>
            <div class="post_header_time">25/3/2021</div>
            </div>
          </div>

          <div class="post_body">
            <div class="body_text">Hellooos! Ahmed Mokhtar is Here </div>
            <div class="post_body_image"><img src={post_user_img2} class="post_image"></img></div>
          </div>
          
          <div class="post_bottom">
            <div class="bottom_li post_comment">Reply< BsReply class="reply_icon" /> </div>
            <div class="bottom_li post_favour">favorite <FaRegHeart class="fav_icon"/></div>
          </div>

        </div>

        

    </div>
    </div>

  );
}


export default Home;
