function appendButton() {
    const elements = document.getElementsByClassName('play-detail play-detail--highlightable');
    for (let i=0; i<elements.length; i++) {
        const element = elements[i];

        const detail_element = element.getElementsByClassName('play-detail__title u-ellipsis-overflow')[0];2
        const beatmap_id = URL.parse(detail_element.attributes['href'].value).pathname.replace('/beatmapsets/', '');

        const download_button = document.createElement('a');
        download_button.setAttribute('href', `osu://b/${beatmap_id}`);
        download_button.innerHTML = '<span class="btn-osu-big__icon"><span class="fa fa-fw"><span class="fas fa-download"></span></span></span>';

        element.getElementsByClassName('play-detail__group play-detail__group--top')[0].append(download_button);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        appendButton();
        document.getElementsByClassName('show-more-link show-more-link--profile-page')[0].addEventListener('click', appendButton);
    }, 1000);
});