import React, { useState, useEffect, useRef } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams
} from 'react-router-dom';

import {
  Plus,
  Layout,
  Image as ImageIcon,
  Download,
  Save,
  Trash2,
  Copy,
  Share2,
  Calendar,
  MapPin
} from 'lucide-react';

import html2canvas from 'html2canvas';
import { TEMPLATES } from './templates';

// --- Navbar ---

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <Link
        to="/"
        className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
      >
        InviteCraft
      </Link>

      <div className="hidden md:flex space-x-8 text-slate-600 font-medium">
        <Link to="/" className="hover:text-indigo-600 transition">
          Home
        </Link>

        <Link to="/templates" className="hover:text-indigo-600 transition">
          Templates
        </Link>

        <Link
          to="/my-invitations"
          className="hover:text-indigo-600 transition"
        >
          My Invitations
        </Link>
      </div>

      <Link
        to="/templates"
        className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
      >
        Create Now
      </Link>
    </div>
  </nav>
);

// --- Footer ---

const Footer = () => (
  <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 mt-20">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <h3 className="text-xl font-bold mb-4">InviteCraft</h3>
        <p className="text-slate-500">
          Premium digital invitations for every occasion. No design skills
          required.
        </p>
      </div>

      <div>
        <h4 className="font-semibold mb-4">Quick Links</h4>

        <ul className="space-y-2 text-slate-500">
          <li>
            <Link to="/templates">Templates</Link>
          </li>

          <li>
            <Link to="/my-invitations">My Designs</Link>
          </li>

          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-4">Follow Us</h4>

        <div className="flex space-x-4 text-slate-400">
          <Share2 className="cursor-pointer hover:text-indigo-600" />
        </div>
      </div>
    </div>

    <div className="text-center mt-12 text-slate-400 text-sm">
      © 2024 InviteCraft. All rights reserved.
    </div>
  </footer>
);

// --- Home ---

const Home = () => (
  <div className="min-h-screen">
    <section className="pt-20 pb-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Create beautiful invitations{' '}
          <span className="text-indigo-600">in minutes</span>
        </h1>

        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Personalized, professional-grade digital invitations for birthdays,
          weddings, and more. Download as high-quality images ready to share.
        </p>

        <Link
          to="/templates"
          className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition transform hover:scale-105 shadow-xl shadow-indigo-200"
        >
          <span>Create an Invitation</span>
          <Plus size={20} />
        </Link>
      </div>
    </section>

    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">
          Templates for every occasion
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {TEMPLATES.slice(0, 4).map((t) => (
            <div
              key={t.id}
              className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100"
            >
              <div
                className={`h-48 w-full rounded-lg mb-4 ${t.style.bg} ${t.style.border} flex items-center justify-center`}
              >
                <span
                  className={`font-serif ${
                    t.style.text || 'text-slate-800'
                  }`}
                >
                  Preview
                </span>
              </div>

              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-slate-500">{t.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

// --- Template Gallery ---

const TemplateGallery = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-2">Select a Template</h1>
          <p className="text-slate-500">
            Pick a starting point for your event
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {TEMPLATES.map((t) => (
          <div
            key={t.id}
            onClick={() => navigate(`/create/${t.id}`)}
            className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-indigo-500 transition-all hover:shadow-2xl shadow-slate-200"
          >
            <div
              className={`h-64 ${t.style.bg} ${t.style.border} flex flex-col items-center justify-center p-6 text-center`}
            >
              <h3
                className={`text-xl font-bold mb-2 ${
                  t.style.text || 'text-slate-900'
                }`}
              >
                {t.name}
              </h3>

              <div
                className="w-12 h-0.5 mb-4"
                style={{ backgroundColor: t.style.accent }}
              ></div>

              <p
                className={`text-xs uppercase tracking-widest ${
                  t.style.text || 'text-slate-500'
                }`}
              >
                {t.category}
              </p>
            </div>

            <div className="p-4 bg-white flex justify-between items-center">
              <span className="font-medium text-slate-700">
                Use Template
              </span>

              <Plus size={18} className="text-indigo-600" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Editor ---

const Editor = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();
  const previewRef = useRef(null);

  const baseTemplate =
    TEMPLATES.find((t) => t.id === templateId) || TEMPLATES[0];

  const [data, setData] = useState({
    title: "Sarah's Birthday Party",
    host: 'The Miller Family',
    date: '2024-10-15',
    time: '19:00',
    location: 'Royal Palace',
    address: 'Rabat, Morocco',
    message: 'Come celebrate this special day with us!',
    dressCode: 'Elegant',
    contact: 'RSVP to 0600-000000',
    accentColor: baseTemplate.style.accent,
    bgColor: baseTemplate.style.bg.replace('bg-', ''),
    textColor: baseTemplate.style.text ? 'white' : 'slate-900',
    borderRadius: '16',
    fontSize: '16'
  });

  const handleDownload = async () => {
    const canvas = await html2canvas(previewRef.current, {
      scale: 3
    });

    const link = document.createElement('a');

    link.download = `invitation-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');

    link.click();
  };

  const handleSave = () => {
    const saved = JSON.parse(
      localStorage.getItem('ic_invitations') || '[]'
    );

    const newInvite = {
      ...data,
      id: Date.now(),
      template: templateId
    };

    localStorage.setItem(
      'ic_invitations',
      JSON.stringify([newInvite, ...saved])
    );

    alert('Invitation saved to your collection!');

    navigate('/my-invitations');
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">

      {/* Settings Panel */}

      <div className="w-full lg:w-1/3 space-y-6 max-h-[85vh] overflow-y-auto pr-2 custom-scrollbar">

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Layout size={20} className="text-indigo-600" />
            Content Settings
          </h2>

          <div className="space-y-4">

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Event Title
              </label>

              <input
                value={data.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    title: e.target.value
                  })
                }
                className="w-full p-2 border rounded-lg focus:ring-2 ring-indigo-500 outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Date
                </label>

                <input
                  type="date"
                  value={data.date}
                  onChange={(e) =>
                    setData({
                      ...data,
                      date: e.target.value
                    })
                  }
                  className="w-full p-2 border rounded-lg focus:ring-2 ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Time
                </label>

                <input
                  type="time"
                  value={data.time}
                  onChange={(e) =>
                    setData({
                      ...data,
                      time: e.target.value
                    })
                  }
                  className="w-full p-2 border rounded-lg focus:ring-2 ring-indigo-500 outline-none"
                />
              </div>

            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Location Name
              </label>

              <input
                value={data.location}
                onChange={(e) =>
                  setData({
                    ...data,
                    location: e.target.value
                  })
                }
                className="w-full p-2 border rounded-lg focus:ring-2 ring-indigo-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Full Address
              </label>

              <input
                value={data.address}
                onChange={(e) =>
                  setData({
                    ...data,
                    address: e.target.value
                  })
                }
                className="w-full p-2 border rounded-lg focus:ring-2 ring-indigo-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Description
              </label>

              <textarea
                value={data.message}
                onChange={(e) =>
                  setData({
                    ...data,
                    message: e.target.value
                  })
                }
                className="w-full p-2 border rounded-lg h-20"
              />
            </div>

          </div>
        </div>

        {/* Visual Design */}

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <ImageIcon size={20} className="text-indigo-600" />
            Visual Design
          </h2>

          <div className="space-y-4">

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Accent Color
              </label>

              <input
                type="color"
                value={data.accentColor}
                onChange={(e) =>
                  setData({
                    ...data,
                    accentColor: e.target.value
                  })
                }
                className="w-full h-10 p-1 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Border Radius
              </label>

              <input
                type="range"
                min="0"
                max="40"
                value={data.borderRadius}
                onChange={(e) =>
                  setData({
                    ...data,
                    borderRadius: e.target.value
                  })
                }
                className="w-full accent-indigo-600"
              />
            </div>

          </div>
        </div>

      </div>

      {/* Live Preview */}

      <div className="flex-1 bg-slate-100 rounded-3xl p-8 flex flex-col items-center min-h-[600px]">

        <div className="flex gap-4 mb-6 w-full max-w-md">

          <button
            onClick={handleSave}
            className="flex-1 flex items-center justify-center gap-2 bg-white text-slate-700 font-bold py-3 rounded-xl shadow-sm hover:bg-slate-50 border border-slate-200 transition"
          >
            <Save size={18} />
            Save
          </button>

          <button
            onClick={handleDownload}
            className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition"
          >
            <Download size={18} />
            Download
          </button>

        </div>

        <div
          ref={previewRef}
          style={{
            borderRadius: `${data.borderRadius}px`
          }}
          className={`aspect-[5/7] w-full max-w-md shadow-2xl overflow-hidden flex flex-col items-center justify-center p-12 text-center transition-all ${baseTemplate.style.bg} ${baseTemplate.style.border}`}
        >

          <div
            style={{ color: data.accentColor }}
            className="uppercase tracking-[0.2em] text-sm mb-6 font-semibold"
          >
            You're Invited
          </div>

          <h1
            className={`text-4xl md:text-5xl font-bold mb-8 ${
              baseTemplate.style.text || 'text-slate-900'
            } leading-tight`}
          >
            {data.title}
          </h1>

          <div className="w-16 h-px bg-slate-300 mb-8"></div>

          <div
            className={`space-y-6 ${
              baseTemplate.style.text || 'text-slate-600'
            }`}
          >

            <div className="flex flex-col items-center gap-1">
              <Calendar
                size={20}
                style={{ color: data.accentColor }}
                className="mb-1"
              />

              <p className="font-bold text-lg">
                {new Date(data.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </p>

              <p>{data.time}</p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <MapPin
                size={20}
                style={{ color: data.accentColor }}
                className="mb-1"
              />

              <p className="font-bold text-lg">
                {data.location}
              </p>

              <p className="text-sm opacity-80">
                {data.address}
              </p>
            </div>

            <p className="italic text-lg px-4 pt-4 border-t border-slate-100">
              "{data.message}"
            </p>

            <div className="pt-4 text-xs font-bold uppercase tracking-widest opacity-60">
              Dress Code: {data.dressCode} • {data.contact}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

// --- My Invitations ---

const MyInvitations = () => {
  const [invites, setInvites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem('ic_invitations') || '[]'
    );

    setInvites(saved);
  }, []);

  const deleteInvite = (id) => {
    const filtered = invites.filter((i) => i.id !== id);

    localStorage.setItem(
      'ic_invitations',
      JSON.stringify(filtered)
    );

    setInvites(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 min-h-screen">

      <h1 className="text-4xl font-bold mb-12">
        My Invitations
      </h1>

      {invites.length === 0 ? (

        <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">

          <Layout
            size={48}
            className="mx-auto text-slate-300 mb-4"
          />

          <p className="text-slate-500 text-xl">
            No invitations created yet.
          </p>

          <Link
            to="/templates"
            className="text-indigo-600 font-bold mt-4 inline-block hover:underline"
          >
            Start creating now →
          </Link>

        </div>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {invites.map((invite) => (

            <div
              key={invite.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
            >

              <div className="p-6">

                <div className="flex justify-between items-start mb-4">

                  <h3 className="text-xl font-bold">
                    {invite.title}
                  </h3>

                  <button
                    onClick={() => deleteInvite(invite.id)}
                    className="text-slate-400 hover:text-red-500 transition"
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

                <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
                  <Calendar size={14} />
                  {invite.date}
                </div>

                <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
                  <MapPin size={14} />
                  {invite.location}
                </div>

                <div className="flex gap-2">

                  <button className="flex-1 bg-indigo-50 text-indigo-600 py-2 rounded-lg font-bold hover:bg-indigo-100 transition flex items-center justify-center gap-2">
                    <Copy size={16} />
                    Edit
                  </button>

                  <button className="flex-1 bg-slate-50 text-slate-600 py-2 rounded-lg font-bold hover:bg-slate-100 transition flex items-center justify-center gap-2">
                    <Share2 size={16} />
                    Share
                  </button>

                </div>

              </div>
            </div>

          ))}

        </div>

      )}

    </div>
  );
};

// --- App Root ---

export default function App() {
  return (
    <Router>

      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/templates"
            element={<TemplateGallery />}
          />

          <Route
            path="/create/:templateId"
            element={<Editor />}
          />

          <Route
            path="/my-invitations"
            element={<MyInvitations />}
          />

        </Routes>

        <Footer />

      </div>

    </Router>
  );
}