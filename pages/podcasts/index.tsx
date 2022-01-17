import Container from 'components/Container';

export default function Podcasts() {
  return (
    <div>
      <Container
        title={`Liked Podcasts`}
        description="A collection of Podcasts."
      >
        <iframe src="https://open.spotify.com/embed/episode/1ldl8iduHDgS0NlX5Jdy3l?utm_source=generator" width="100%" height="232" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </Container>
    </div>
  )
}
