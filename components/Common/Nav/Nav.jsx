import { ImCross } from 'react-icons/im'
import { FiAward } from 'react-icons/fi'
import { FaHandshake } from 'react-icons/fa'
import { ImHome } from 'react-icons/im'
import { HiIdentification } from 'react-icons/hi'
import NavItem from './NavItem'
import DrawerLayout from '../DrawerLayout'


const Nav = ({ setIsOpen, isOpen }) => {
    return (
        <DrawerLayout setIsOpen={setIsOpen} isOpen={isOpen}>
            <div className="absolute z-50 flex flex-col lg:inset-y-0 -right-0 lg:right-0 w-64 h-screen lg:mt-3 lg:mr-3 lg:h-[96%] bg-DeepNightBlack shadow-2xl md:rounded-xl md:overflow-hidden">
                {/* Close Button */}
                <div
                    onClick={e => setIsOpen(false)}
                    className="flex text-LightGray h-10 items-center justify-start px-6 text-sm bg-EveningBlack"
                >
                    <ImCross />
                </div>

                {/* Nav Items */}
                <div className="flex flex-col gap-y-2 px-6 py-4 w-full overflow-y-auto">
                    <NavItem setIsOpen={setIsOpen} NavRoute="/" NavIcon={<ImHome />} NavText="Home" />
                    <NavItem setIsOpen={setIsOpen} NavRoute="/contact" NavIcon={<FaHandshake />} NavText="Contact" />
                    <NavItem setIsOpen={setIsOpen} NavRoute="/background" NavIcon={<HiIdentification />} NavText="Background" />
                    <NavItem setIsOpen={setIsOpen} NavRoute="/portfolio" NavIcon={<FiAward />} NavText="Portfolio" />
                </div>
            </div>
        </DrawerLayout>

    )
}

export default Nav