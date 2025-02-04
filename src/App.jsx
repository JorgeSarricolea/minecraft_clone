import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground.jsx";
import { Player } from "./components/Player.jsx";
import { FPV as Fpv } from "./components/FPV.jsx";
import { Cubes } from "./components/Cubes.jsx";
import { TextureSelector } from "./components/TextureSelector.jsx";
import { Menu } from "./components/Menu.jsx";

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={2} />
        <Fpv />
        <Physics>
          <Cubes />
          <Player />
          <Ground />
        </Physics>
      </Canvas>

      <Menu />
      <div className="pointer">+</div>
      <TextureSelector />
      <span className="powered">
        Powered by{" "}
        <a href="https://jorgesarricolea.com" target="_blank">
          Jorge Sarricolea
        </a>
      </span>
      <div class="controls-container">
        <div class="key" id="key-w">
          W
        </div>
        <div class="key-row">
          <div class="key" id="key-a">
            A
          </div>
          <div class="key" id="key-s">
            S
          </div>
          <div class="key" id="key-d">
            D
          </div>
        </div>
        <div class="key" id="key-space">
          Space
        </div>
      </div>
      <span className="delete-tip">alt + click to delete a block</span>
    </>
  );
}

export default App;
