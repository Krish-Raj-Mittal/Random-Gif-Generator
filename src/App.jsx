import Random from './components/Random';
import Tag from './components/Tag';

export default function App() {
  return (
    <div className='min-w-screen min-h-screen flex flex-col  background relative'>
        <h1 className='absolute w-11/12 text-center mt-[40px] ml-[25px] px-10 py-2 text-3xl items-center bg-white rounded-lg'>RANDOM GIFS</h1>
        <div className='flex flex-col items-center w-full gap-y-10 mt-[150px]'>
          <Random/>
          <Tag/>
        </div>
    </div>
  );
}
