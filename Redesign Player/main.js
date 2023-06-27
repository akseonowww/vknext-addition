// const hundleHideBG = () => {
// 	if(localStorage.getItem('HideBG')) {
// 		localStorage.HideBG = false
// 	} else {
// 		localStorage.HideBG = true
// 	}
// 	console.log('hundleHideBG', localStorage.getItem('HideBG'))
// }

// const hundleHideAnimation = () => {
// 	console.log('hundleHideAnimation')
// }


setTimeout(function () {

   let coverTrackBgStyles = `position: absolute; z-index: 12; top: 24px; left: 16px; height: 104px; width: 104px; filter: blur(7px); border-radius: 18px; transition: all 2s; opacity: .5; animation: sizeBig 14s ease-in-out infinite; background-size: cover; background-image:`

   const iconValue = `<svg style="position: absolute; top: -6px; left: -34px; opacity: .7;" width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10.4302 0C11.3332 0 12.1819 0.694774 12.1819 1.69058V14.3254C12.1819 15.3212 11.3332 16.016 10.4302 16.016C9.66721 16.016 8.92327 15.7353 8.36481 15.217L4.12058 11.278H2.31164C1.19328 11.278 0.169922 10.4211 0.169922 9.22542V6.79058C0.169922 5.59489 1.19328 4.73806 2.31164 4.73806H4.12058L8.36481 0.798958C8.92327 0.28066 9.66721 0 10.4302 0ZM10.3801 1.80275C10.0729 1.81441 9.79163 1.93295 9.59053 2.11962L5.08707 6.29929C4.92046 6.45395 4.70154 6.53983 4.47422 6.53983H2.31164C2.17203 6.53983 1.97172 6.62502 1.97172 6.79058V9.22542C1.97172 9.39098 2.17203 9.47617 2.31164 9.47617H4.47422C4.70154 9.47617 4.92046 9.56205 5.08707 9.71671L9.59053 13.8964C9.79163 14.0831 10.0729 14.2016 10.3801 14.2133V1.80275ZM17.7255 2.26745C19.2463 3.79585 20.1899 5.79748 20.1899 8.008C20.1899 10.2185 19.2463 12.2201 17.7255 13.7485C17.3745 14.1013 16.804 14.1027 16.4514 13.7517C16.0986 13.4008 16.0972 12.8303 16.4482 12.4777C17.6765 11.2432 18.3881 9.68397 18.3881 8.008C18.3881 6.33203 17.6765 4.77279 16.4482 3.53835C16.0972 3.18566 16.0986 2.61524 16.4514 2.26429C16.804 1.91334 17.3745 1.91475 17.7255 2.26745ZM15.1717 5.32364C15.7983 6.06356 16.1859 6.98988 16.1859 8.008C16.1859 9.02612 15.7983 9.95244 15.1717 10.6924C14.8501 11.0721 14.2816 11.1191 13.9019 10.7976C13.5223 10.476 13.4752 9.9075 13.7967 9.52782C14.1796 9.07577 14.3841 8.55284 14.3841 8.008C14.3841 7.46316 14.1796 6.94023 13.7967 6.48818C13.4752 6.1085 13.5223 5.54002 13.9019 5.21844C14.2816 4.89687 14.8501 4.94397 15.1717 5.32364Z" fill="var(--vkui--color_icon_secondary)"/> </svg>`

   // Create box-shadow (copy cover) in page Music
   if (document.querySelector('#page_layout .audio_page_player2')) {

      const track = document.querySelector('#page_layout .audio_page_player2')
      const coverTrack = document.querySelector('#page_layout .audio_page_player__cover')

      track.insertAdjacentHTML('beforeend', (`<div class="VKNextU-cover-shadow" style='` + coverTrackBgStyles + coverTrack.style.backgroundImage + `;'></div>`))


      let observerCover = new MutationObserver(el => {
         document.querySelector('.VKNextU-cover-shadow').style.backgroundImage = coverTrack.style.backgroundImage
      });
      observerCover.observe(coverTrack, { attributes: true })

      let observerContainer = new MutationObserver(el => {
         // document.querySelector('.audio_page_player2.audio_page_player_fixed').style.backgroundImage = coverTrack.style.backgroundImage

         console.log('=============================================',
            document.querySelector('.audio_page_player2.audio_page_player_fixed').classList)
      });
      observerContainer.observe(document.querySelector('.audio_page_player2'), { attributes: true })
      // 
      // let observerPlayAudio = new MutationObserver(el => {
      // 	console.log('===========================================', el)
      // 	console.log(document.querySelector('#page_layout button.audio_page_player_play.audio_playing'))
      // 	if (document.querySelector('#page_layout button.audio_page_player_play.audio_playing')) {
      // 		document.querySelector('.VKNextU-cover-shadow').style.animation = 'sizeBig 14s ease-in-out infinite'
      // 	} else {
      // 		document.querySelector('.VKNextU-cover-shadow').style.animationDuration = '140s'
      // 			document.querySelector('.VKNextU-cover-shadow').style.animation = 'sizeBig 14s ease-in-out infinite'
      // 			console.log('===========================================', 2)
      // 	}
      // });
      // observerPlayAudio.observe(document.querySelector('#page_layout .audio_page_player_play'), {attributes: true})
   }






   // .top_audio_btn_group
   const topAudioGroup = document.querySelector('#top_audio_btn_group')
   let coverTrackBgStylesHeader = `position: absolute; z-index: 12; top: 24px; left: 16px; height: 88px; width: 88px; filter: blur(7px); border-radius: 18px; transition: all 2s; animation: sizeBig_CoverHeader 14s ease-in-out infinite; opacity: .5; background-size: cover; background-image:`

   let observerH = new MutationObserver(el => {
      console.log(el);

      // Create box-shadow (copy cover) in header
      if (!document.querySelector('.VKNextU-cover-shadow-Header')) {

         setTimeout(function () {
            const trackHeader = document.querySelector('.HeaderNav__audio .audio_page_player2')
            const coverTrackHeader = document.querySelector('.HeaderNav__audio .audio_page_player__cover')

            console.log(trackHeader);

            trackHeader.insertAdjacentHTML('beforeend', (`<div class="VKNextU-cover-shadow-Header" style='`
               + coverTrackBgStylesHeader + coverTrackHeader.style.backgroundImage + `;'></div>`))


            let observerHeader = new MutationObserver(el => {
               document.querySelector('.VKNextU-cover-shadow-Header').style.backgroundImage = coverTrackHeader.style.backgroundImage

            });


            const lineValue = document.querySelector('.HeaderNav__audio .audio_page_player_volume_wrap .slider_slide')
            lineValue.insertAdjacentHTML('beforeend', iconValue)

            observerHeader.observe(coverTrackHeader, { attributes: true })
         }, 1000)
      } else {
         const trackHeader = document.querySelector('.HeaderNav__audio .audio_page_player2')
         const coverTrackHeader = document.querySelector('.HeaderNav__audio .audio_page_player__cover')

         console.log(trackHeader);

         let observerHeader = new MutationObserver(el => {
            document.querySelector('.VKNextU-cover-shadow-Header').style.backgroundImage = coverTrackHeader.style.backgroundImage

         });
      }
   });

   observerH.observe(topAudioGroup, { attributes: true })




   const lineValue = document.querySelector('.audio_page_player_volume_wrap .slider_slide')

   lineValue.insertAdjacentHTML('beforeend', iconValue)



   // Settings 
   const audioSection = document.querySelectorAll('#page_layout .audio_section .CatalogSection .CatalogBlock')[3]

   const musicSetting = `
<div style="padding: 28px 24px 44px;">
  <div
    class="CatalogBlock__content CatalogBlock__recommended_playlists_official_header CatalogBlock__layout--header"
    data-id="PUlQVA8GR0R3W0tMF0YOBSkGBBNbUA4CGRsFF0xYAhUyGDYZU1ICBS8KBSldUQoCIxlLWhcASVx3R0tHABZRVzs"
  >
    <h2 class="CatalogBlock__title CatalogRecommendedPlaylistsOfficialHeader">
      Настройки плеера
    </h2>
    <div class="CatalogBlock__headerActions">
      <a href="https://vk.com/akseonowww" class="audio_page_block__show_all_link">
        <div class="audio_page_block__show_all_link_label">
          Автор: Руслан Аксёнов (@akseonowww)
        </div>
      </a>
    </div>
  </div>

  <div
    class="CatalogBlock__content CatalogBlock__recommended_playlists_official"
  >
    <input type="checkbox" id="hide-background" onClick="hundleHideBG()" />
    <label for="hide-background">Убрать фон и бордер</label> <br /> <br />
    <input type="checkbox" id="hide-animation" onClick="hundleHideAnimation()" />
    <label for="hide-animation">Убрать анимацию</label>
  </div>
</div>


	`

   // audioSection.insertAdjacentHTML('afterend', musicSetting)
   // console.log(audioSection)


}, 1000)