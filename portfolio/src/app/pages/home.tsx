import constructionUrl from "/construction-compressed.webp"

export const Home = () => {
  return (
    <>
      <div className="Title">Main Hub</div>
      <img 
        src={constructionUrl}
        alt="Under Construction"
        style={{ maxWidth: '50%' }}
      />
      <div>Under Construction</div>
    </>
  )
};