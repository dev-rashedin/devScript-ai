import { Link } from "react-router";
import { services } from "../data";
import { HiMiniArrowTopRightOnSquare } from '../data/icons';
import AnimatedBorder from "./ui/animated-border";


const Services = () => {
  return (
    <section
      id='services'
      className='max-w-6xl mx-auto grid gap-6 md:grid-cols-3'
    >
      {services.map((s) => (
        <div
          key={s.path}
          className='p-6 rounded-2xl shadow flex border border-r-4 border-b-4 border-primary bg-card'
        >
          <div className='flex flex-col space-y-3'>
            {<s.icon className='w-8 h-8' />}
            <h2 className='text-xl font-semibold'>{s.title}</h2>
            <p className='text-[15px] opacity-85'>{s.desc}</p>

            <Link
              to={s.path}
              className='flex items-center gap-2 rounded-full mt-1 relative hover:text-primary group hover:transform-y-1'
            >
              <span className="relative">
               {s.cta}
                <AnimatedBorder />
              </span>
              <HiMiniArrowTopRightOnSquare
                height={20}
                width={20}
                className='opacity-75 text-lg transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110 group-hover:font-bold group-hover:opacity-100'
              />
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
export default Services