import React from 'react';
/* ------ Style 👇---- */
import './css/App.css';
import './css/statistics.css';
/* ------ Images 👇---- */
import wallpaper from './images/bg33.jpg';



function Statistics() {
  return (
    
    <div>
            <div class="home_wallpaper" id="statistic_wallpaper_blured"><img src={wallpaper} class="wallpaper_img"></img></div>

            <h1 class="statistic_header">Statistics Page</h1>

    <div class="statistics_container">
      <div class="statistic_table">
        
        <div class="cases_over_world">
            <h3 class="cases_over_world_h3">Cases Over World :</h3>
            <div class="cases_number_over_world">125,571,343</div>    
        </div>
       
       
       
        </div>

        <div class="statistic_table_1">
        <div class="death_recoverd_line">
          <div class="Death_over_world">
              <h3 class="Death_over_world_h3">Deaths</h3>
              <div class="Death_number_over_world">2,759,180</div>
          </div>
          
          <div class="Recovered_over_world">
          <h3 class="recovered_over_world_h3">Recovered</h3>
          <div class="recover_number_over_world">101,384,522</div>
          </div>
        </div>
        </div>



        <div class="statistic_table_2">
        
        <div class="active_over_world">
            <h3 class="active_over_world_h3">ACTIVE CASES</h3>
            <div class="active_number_over_world">21,427,641 <p class="active_cases_p">Currently Infected Patients</p></div>    
        </div>

        <div class="CLOSED _recoverd_line">
          <div class="CLOSED _over_world">
              <h3 class="CLOSED _over_world_h3">CLOSED </h3>
              <div class="CLOSED _number_over_world">104,143,702 <p class="closed_cases_p">Cases which had an outcome</p></div>
          </div>
          
         
        </div>

      </div>


    </div>
    </div>
  );
}
 
export default Statistics;
