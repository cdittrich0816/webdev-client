export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      <img
        id="wd-ai-image"
        width="200px"
        alt="Earth from space"
        src="https://images-assets.nasa.gov/image/as17-148-22727/as17-148-22727~orig.jpg"
      />
      <br />
  
      <img
        id="wd-your-image"
        width="200px"
        alt="Lake Lucerne, Switzerland"
        src="https://media.istockphoto.com/id/2179727461/photo/weggis-village-overlooking-lake-lucerne-and-swiss-alps.jpg?s=612x612&w=0&k=20&c=vpsY1xgGZbim0JG-s0NNDIvTukOxbP6BboUyn8hh5Ic="
      />
    </div>
  );
}
