import { Link } from "react-router";
import { services } from "../data";


const Services = () => {
  return (
    <section className='max-w-6xl mx-auto grid gap-6 md:grid-cols-3'>
      {services.map((s) => (
        <div
          key={s.path}
          className='p-6 rounded-2xl shadow flex border border-r-4 border-b-4 border-primary group  bg-card'
        >
          <div className='flex flex-col space-y-2'>
            {<s.icon className='w-8 h-8 hover:text-white' />}
            <h2 className='text-xl font-semibold'>{s.title}</h2>
            <p className='text-sm text-muted'>{s.desc}</p>

            <Link
              to={s.path}
              className=' border w-36 text-center rounded-full p-1 mt-2 relative hover:text-white flex justify-center hover:transform-y-1'
            >
              <span className='absolute rounded-2xl left-0 top-0 h-full w-0 bg-primary transition-all duration-500 ease-in-out group-hover:w-full'></span>
              <span className='text-black group-hover:text-white z-50'>
                Check it here
              </span>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
export default Services