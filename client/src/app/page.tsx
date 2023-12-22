import HomeScene from "./components/HomeScene";
import NameWithGlitch from "./components/NameWithGlitch";
import SVGIcon from "./utils/SVGIcon";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <>
      <div
        id="Home"
        className="relative h-screen flex flex-col justify-center items-start overflow-hidden"
      >
        <HomeScene />
        <div className="relative flex flex-col items-start left-24">
          <NameWithGlitch text="Hi!" />
          <NameWithGlitch text="I'm Nico" />
          <NameWithGlitch text="FullStack" />
          <NameWithGlitch text="Developer" />
        </div>
        <div className="absolute bottom-4 self-end px-12 inline-flex gap-4">
          <SVGIcon
            path={
              "M6.424.865h38.14c3.533 0 6.423 2.891 6.423 6.424v38.14c0 3.533-2.89 6.424-6.424 6.424H6.423C2.892 51.853 0 48.962 0 45.429V7.289C0 3.756 2.89.865 6.424.865ZM9.178 14.39c0-1.05.367-1.916 1.102-2.598.735-.683 1.69-1.024 2.866-1.024 1.155 0 2.09.336 2.804 1.008.735.693 1.102 1.595 1.102 2.708 0 1.008-.357 1.849-1.07 2.52-.736.693-1.702 1.04-2.899 1.04h-.031c-1.155 0-2.09-.347-2.804-1.04-.713-.693-1.07-1.564-1.07-2.614Zm.41 27.56V20.91h6.992v21.04H9.587Zm10.866 0h6.992V30.202c0-.735.084-1.302.252-1.7a4.562 4.562 0 0 1 1.34-1.812c.597-.494 1.349-.74 2.251-.74 2.352 0 3.528 1.585 3.528 4.756V41.95h6.992V29.887c0-3.108-.734-5.465-2.205-7.072-1.47-1.606-3.411-2.409-5.826-2.409-2.71 0-4.82 1.165-6.332 3.496v.063h-.031l.031-.063V20.91h-6.992c.042.672.063 2.762.063 6.268 0 3.507-.021 8.43-.063 14.772Z"
            }
          />
          <SVGIcon
            path={
              "M6.694.865h38.14c3.533 0 6.423 2.891 6.423 6.424v38.14c0 3.533-2.89 6.424-6.423 6.424H6.694c-3.533 0-6.423-2.891-6.423-6.424V7.289C.27 3.756 3.16.865 6.694.865Zm19.07 6.928c-10.512 0-19.035 8.523-19.035 19.036 0 8.41 5.453 15.545 13.017 18.063.951.176 1.3-.414 1.3-.917 0-.453-.017-1.952-.026-3.543-5.295 1.151-6.412-2.247-6.412-2.247-.866-2.2-2.114-2.785-2.114-2.785-1.727-1.18.13-1.157.13-1.157 1.912.134 2.919 1.962 2.919 1.962 1.697 2.91 4.452 2.069 5.538 1.583.172-1.23.665-2.071 1.209-2.546-4.227-.48-8.672-2.113-8.672-9.408 0-2.078.743-3.775 1.961-5.11-.198-.479-.85-2.414.184-5.036 0 0 1.598-.512 5.236 1.95a18.263 18.263 0 0 1 4.765-.64c1.618.008 3.247.22 4.769.64 3.633-2.462 5.23-1.95 5.23-1.95 1.035 2.622.383 4.557.185 5.037 1.221 1.334 1.96 3.031 1.96 5.11 0 7.31-4.454 8.92-8.692 9.392.683.591 1.291 1.749 1.291 3.525 0 2.547-.022 4.597-.022 5.223 0 .507.342 1.1 1.307.914 7.56-2.52 13.008-9.653 13.008-18.06 0-10.514-8.523-19.036-19.036-19.036ZM13.858 34.91c-.042.095-.19.123-.327.058-.137-.062-.214-.191-.17-.286.04-.098.19-.125.327-.06.139.063.218.193.17.288Zm.936.836c-.09.083-.268.045-.388-.089-.125-.133-.148-.31-.057-.395.094-.085.266-.045.392.088.124.134.148.31.053.396Zm.642 1.068c-.116.081-.306.005-.426-.164-.115-.17-.115-.372.004-.454.118-.081.306-.008.426.16.116.172.116.375-.004.458Zm1.087 1.239c-.104.114-.327.083-.489-.074-.167-.154-.213-.371-.109-.486.106-.115.33-.083.494.073.165.154.214.372.104.486Zm1.404.418c-.046.149-.26.216-.476.153-.215-.066-.356-.241-.312-.39.045-.152.26-.221.477-.154.215.065.356.239.31.39Zm1.598.176c.005.157-.177.288-.404.29-.227.006-.412-.122-.415-.276 0-.159.179-.288.407-.292.226-.004.412.122.412.278Zm1.57-.06c.026.154-.131.311-.356.352-.22.04-.425-.053-.453-.206-.027-.157.133-.314.353-.355.225-.038.426.053.455.21Z"
            }
          />
          <SVGIcon
            path={
              "M6.791.865h38.141c3.533 0 6.423 2.89 6.423 6.424v38.14c0 3.533-2.89 6.424-6.423 6.424H6.792c-3.533 0-6.423-2.891-6.423-6.424V7.29C.369 3.756 3.259.865 6.79.865ZM40.62 39.913 29.545 23.825 41.82 9.543h-2.808l-2.405 2.784-8.316 9.678-7.92-11.508-.657-.954H9.98l2.374 3.45 10.532 15.304L9.943 43.363h2.808l11.388-13.249 8.463 12.296.656.953h9.735l-2.374-3.45Zm-6.222 1.248-8.792-12.774-1.252-1.818L14.15 11.745h4.39l8.25 11.988 1.252 1.819 10.743 15.61h-4.388Z"
            }
          />
          <SVGIcon
            path={
              "m44.615 16.474-7.104 19.77h-5.629l-7.104-19.77h5.281l4.71 13.883 4.709-13.883h5.137ZM16.357 36.652c-1.452 0-2.788-.218-4.017-.653-1.229-.436-2.283-1.084-3.164-1.945-.884-.856-1.568-1.93-2.05-3.218-.487-1.287-.728-2.773-.728-4.46 0-1.567.232-2.99.692-4.268.465-1.279 1.14-2.375 2.02-3.286.848-.88 1.898-1.56 3.15-2.035 1.254-.48 2.622-.721 4.11-.721.817 0 1.559.046 2.22.14.657.091 1.269.214 1.827.363.586.172 1.113.358 1.591.567.479.208.894.399 1.251.58v4.795h-.576a24.78 24.78 0 0 0-.925-.752c-.37-.29-.79-.576-1.264-.857-.479-.281-1.001-.517-1.56-.712a5.4 5.4 0 0 0-1.791-.29c-.71 0-1.381.114-2.02.34-.638.222-1.228.598-1.77 1.12-.513.507-.933 1.174-1.25 2.003-.317.834-.478 1.845-.478 3.027 0 1.243.174 2.276.518 3.11.344.83.778 1.486 1.305 1.962.531.49 1.126.834 1.778 1.042a6.396 6.396 0 0 0 1.939.313c.612 0 1.22-.09 1.819-.276a6.96 6.96 0 0 0 1.657-.748c.424-.254.822-.521 1.189-.811.366-.29.67-.54.906-.748h.523v4.722c-.487.218-.956.426-1.403.621-.442.195-.911.363-1.403.503-.634.187-1.233.327-1.791.426-.559.096-1.327.146-2.305.146ZM6.437.865h38.14C48.11.865 51 3.755 51 7.29v38.14c0 3.533-2.89 6.424-6.423 6.424H6.437c-3.534 0-6.424-2.891-6.424-6.424V7.29c0-3.533 2.89-6.424 6.423-6.424Z"
            }
          />
        </div>
      </div>
      <div id="Skills" className="relative h-screen bg-red-600 flex flex-col justify-center items-center overflow-hidden">
        <Carousel cards={[]}/>
      </div>
      <div
        id="Project"
        className="inline-block h-screen w-[100vw]"
      ></div>
      <div
        id="AboutMe"
        className="inline-block h-screen w-[100vw]"
      ></div>
      <div
        id="Contact"
        className="inline-block h-screen w-[100vw]"
      ></div>
    </>
  );
}
