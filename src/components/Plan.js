import Button from "./Button.js";

const Plan = () => {
  const [state, setState] = React.useState('annual');
  if (state === 'monthly') {
    return (
      <>
        <span className='flex-col center'>
          <strong>Monthly Plan</strong>
          $5.99/month
        </span>
        <Button type='button' className='link selectable' content='Change' onClick={() => setState('annual')} />
      </>
    )
  };
  return (
    <>
      <span className='flex-col center'>
        <strong>Annual Plan</strong>
        $59.99/year
      </span>
      <Button type='button' className='link selectable' content='Change' onClick={() => setState('monthly')} />
    </>
  )
};

export default Plan;