import { services } from '../../data';


const ServiceCard = () => {
  return (
    <main id='services' className='w-full xl:w-1/2 max-w-6xl mx-auto xl:px-12'>
      {/* <h2 className='text-center my-8'>Explore Our Services</h2> */}
      <section className=' grid gap-6 md:grid-cols-3 lg:grid-cols-3'>
        {services.map((s) => (
          <div
            key={s.path}
            className='p-6 rounded-2xl shadow flex border border-primary bg-card'
          >
            <div className='flex flex-col space-y-3'>
              {<s.icon className='w-8 h-8' />}
              <h2 className='text-base font-semibold'>{s.title}</h2>
              {/* <p className='text-[15px] opacity-85'>{s.desc}</p> */}

            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
export default ServiceCard;
