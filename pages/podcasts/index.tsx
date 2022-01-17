import Container from 'components/Container';

export default function Podcasts() {
  return (
    <div>
      <Container
        title={`Liked Podcasts`}
        description="A collection of Podcasts."
      >
        <iframe src="https://open.spotify.com/embed/episode/1ldl8iduHDgS0NlX5Jdy3l?utm_source=generator" width="100%" height="232" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

        <iframe allow="autoplay *; encrypted-media *; fullscreen *" frameBorder="0" height="175" style={{ "width": "100%", "maxWidth": "660px", "overflow": "hidden", "background": "transparent" }} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.podcasts.apple.com/us/podcast/this-is-why-your-boss-is-so-bad-at-his-job/id1393035987?i=1000544052822"></iframe>
      </Container>
    </div>
  )
}
