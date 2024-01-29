import { Routes, Route } from "react-router-dom";
import 'reset-css';
import './assets/scss/style.scss';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Events from './components/events/Events';
import EventDetails from './components/eventDetails/EventDetails';
import Ticket from './components/ticket/Ticket';
import Contact from './components/contact/Contact';
import PlanEvents from './components/planEvents/PlanEvents';
import SellTickets from './components/sellTickets/SellTickets';
import Account from './components/account/Account';
import Press from './components/press/Press';
import HelpCenter from './components/helpCenter/HelpCenter';
import HowItWorks from './components/howItWorks/HowItWorks';
import Privacy from './components/privacy/Privacy';
import Terms from './components/terms/Terms';
import WishListPage from './components/wishListPage/WishListPage';
import NotFoundPage from './components/notFoundPage/NotFoundPage';
import SingInForm from "./components/singInForm/SingInForm";


function App() {
  return (
    <Routes>
        <Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/ticket" element={<Ticket />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/plan_Events" element={<PlanEvents />} />
            <Route path="/sell_Tickets" element={<SellTickets />} />
            <Route path="/account" element={<Account />} />
            <Route path="/press" element={<Press />} />
            <Route path="/help_Center" element={<HelpCenter />} />
            <Route path="/how_It_Works" element={<HowItWorks />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/wishlist" element={<WishListPage />} />
            <Route path="/singIn" element={<SingInForm />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Route>
      </Routes>
  );
}

export default App;