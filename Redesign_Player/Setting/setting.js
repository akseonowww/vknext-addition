// === Settings 
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