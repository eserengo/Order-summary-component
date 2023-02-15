import DisplayOnResize from "./components/Display.js";
import Headings from "./components/Headings.js";
import Button from "./components/Button.js";
import Para from "./components/Para.js";
import Image from "./components/Image.js";
import Attribution from "./components/Attribution.js";
import Plan from "./components/Plan.js";

(function () {
  const closeModal = () => {
    document.querySelector('.modal').remove();
  }

  const Card = () => {
    const [state, setState] = React.useState('off');
    if (state == 'off') {
      return (
        <main className='card flex-col center'>
          <Image className='hero' src='./src/images/illustration-hero.svg' alt='illustration hero' />
          <Headings query='h1' className='primary title' content='Order Summary' />
          <Para className='para' content='You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!' />
          <section className='flex-row center'>
            <Image className='icon' src='./src/images/icon-music.svg' alt='icon music' />
            <Plan />
          </section>
          <Button type='button' className='primary button selectable' onClick={() => { setState('on'); document.querySelector('.card').classList.add('blur'); }} content='Proceed to Payment' />
          <Button type='button' className='secondary button selectable' onClick={() => { setState('on'); document.querySelector('.card').classList.add('blur'); }} content='Cancel Order' />
        </main>
      )
    }
    return (
      <>
        <main className='card flex-col center'>
          <Image className='hero' src='./src/images/illustration-hero.svg' alt='illustration hero' />
          <Headings query='h1' className='primary title' content='Order Summary' />
          <Para className='para' content='You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!' />
          <section className='flex-row center'>
            <Image className='icon' src='./src/images/icon-music.svg' alt='icon music' />
            <Plan />
          </section>
          <Button type='button' className='primary button disabled' content='Proceed to Payment' />
          <Button type='button' className='secondary button disabled' content='Cancel Order' />
        </main>
        <div className='modal abs center'>
          <i className='fa fa-times selectable right' onClick={() => { setState('off'); closeModal; document.querySelector('.card').classList.remove('blur'); }}></i>
          <Headings query='h2' className='secondary title uppercase' content='thank you!' />
        </div>
      </>
    )
  }

  window.addEventListener('resize', () => {
    let timer;
    window.clearTimeout(timer);
    timer = window.setTimeout(DisplayOnResize(), 500);
  });

  const App = () => {
    React.useEffect(() => {
      DisplayOnResize()
    }, []);
    return (
      <>
        <Card />
        <Attribution />
      </>
    )
  }

  document.querySelector('body').insertAdjacentHTML('afterbegin', `<div id='root' />`);
  ReactDOM.createRoot(document.getElementById('root')).render(<App tab='home' />);
})();