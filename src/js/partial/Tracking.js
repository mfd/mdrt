class Tracking {

  constructor() {

    //Header-Footer Réseaux sociaux

    $('header .headerElement .toolLinks a.fb, footer .followUs a.fb').on('click',() => {
      ga('send', 'event', 'Social', 'Click-Facebook', '');
    });

    $('header .headerElement .toolLinks a.yt, footer .followUs a.yt').on('click',() => {
      ga('send', 'event', 'Social', 'Click-Youtube', '');
    });

    $('header .headerElement .toolLinks a.ig, footer .followUs a.ig').on('click',() => {
      ga('send', 'event', 'Social', 'Click-Instagram', '');
    });

    //Contact

    $('footer .contact').on('click',() => {
      ga('send', 'event', 'Contact', 'Click', '');
    });

    //Équipe

    $('.team .member .video').on('click',(e) => {
      ga('send', 'event', 'Équipe', 'Play-Video', $(e.currentTarget).siblings('.text').find('h3').text());
    });

    //À Propos

    $('.about .media.startPlayer').on('click',() => {
      ga('send', 'event', 'Pages', 'Play-Video', $('.aboutContainer .title h2').text());
    });

    $('.about .sharing a.shareFacebook, .about .articleFooter .share a.shareFacebook').on('click',() => {
      ga('send', 'event', 'Pages', 'Share-Facebook', $('.aboutContainer .title h2').text());
    });

    $('.about .sharing a.shareTwitter, .about .articleFooter .share a.shareTwitter').on('click',() => {
      ga('send', 'event', 'Pages', 'Share-Twitter', $('.aboutContainer .title h2').text());
    });

    $('.about .sharing a.sharePinterest, .about .articleFooter .share a.sharePinterest').on('click',() => {
      ga('send', 'event', 'Pages', 'Share-Pinterest', $('.aboutContainer .title h2').text());
    });

    //Épisodes

    $('.singleEpisode .media.startPlayer').on('click',() => {
      ga('send', 'event', 'Episodes', 'Play-Video', $('.singleEpisodeContainer h2.pageTitle').text()+' - '+$('.singleEpisodeContainer h6.label span').text());
    });

    $('.singleEpisode .sharing a.shareFacebook, .singleEpisode .articleFooter .share a.shareFacebook').on('click',() => {
      ga('send', 'event', 'Episodes', 'Share-Facebook', $('.singleEpisode h2.pageTitle').text()+' - '+$('.singleEpisodeContainer h6.label span').text());
    });

    $('.singleEpisode .sharing a.shareTwitter, .singleEpisode .articleFooter .share a.shareTwitter').on('click',() => {
      ga('send', 'event', 'Episodes', 'Share-Twitter', $('.singleEpisode h2.pageTitle').text()+' - '+$('.singleEpisodeContainer h6.label span').text());
    });

    $('.singleEpisode .sharing a.sharePinterest, .singleEpisode .articleFooter .share a.sharePinterest').on('click',() => {
      ga('send', 'event', 'Episodes', 'Share-Pinterest', $('.singleEpisode h2.pageTitle').text()+' - '+$('.singleEpisodeContainer h6.label span').text());
    });

    //Articles

    $('.singleArticle .sharing a.shareFacebook, .singleArticle .articleFooter .share a.shareFacebook').on('click',() => {
      ga('send', 'event', 'Articles', 'Share-Facebook', $('.singleArticle h2.pageTitle').text());
    });

    $('.singleArticle .sharing a.shareTwitter, .singleArticle .articleFooter .share a.shareTwitter').on('click',() => {
      ga('send', 'event', 'Articles', 'Share-Twitter', $('.singleArticle h2.pageTitle').text());
    });

    $('.singleArticle .sharing a.sharePinterest, .singleArticle .articleFooter .share a.sharePinterest').on('click',() => {
      ga('send', 'event', 'Articles', 'Share-Pinterest', $('.singleArticle h2.pageTitle').text());
    });
  }

}

export default Tracking;
