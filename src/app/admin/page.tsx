'use client';

import { useState, useEffect } from 'react';
import { Heart, LogOut, Star, Mail, Trash2, Eye } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  created_at: string;
}

interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export default function AdminPanel() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'reviews' | 'contacts'>('reviews');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      loadData();
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_auth', 'true');
      loadData();
    } else {
      setError('Senha incorreta');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_auth');
    setPassword('');
  };

  const loadData = async () => {
    setLoading(true);
    try {
      // Carregar reviews
      const reviewsRes = await fetch('/api/admin/reviews');
      if (reviewsRes.ok) {
        const reviewsData = await reviewsRes.json();
        setReviews(reviewsData);
      }

      // Carregar contatos
      const contactsRes = await fetch('/api/admin/contacts');
      if (contactsRes.ok) {
        const contactsData = await contactsRes.json();
        setContacts(contactsData);
      }
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
    setLoading(false);
  };

  const deleteReview = async (id: string) => {
    if (!confirm('Tem certeza que deseja deletar esta avaliação?')) return;

    try {
      const res = await fetch(`/api/admin/reviews?id=${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setReviews(reviews.filter((r) => r.id !== id));
      }
    } catch (error) {
      console.error('Erro ao deletar avaliação:', error);
    }
  };

  const deleteContact = async (id: string) => {
    if (!confirm('Tem certeza que deseja deletar este contato?')) return;

    try {
      const res = await fetch(`/api/admin/contacts?id=${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setContacts(contacts.filter((c) => c.id !== id));
      }
    } catch (error) {
      console.error('Erro ao deletar contato:', error);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-rose-100">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Heart className="w-7 h-7 text-white" fill="white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Admin Panel
              </h1>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Senha de Administrador
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-rose-200 focus:border-rose-500 focus:outline-none transition-colors"
                  placeholder="Digite a senha"
                  required
                />
              </div>

              {error && (
                <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-700 text-center font-medium">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-rose-500/50 transition-all duration-300 hover:scale-105"
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" fill="white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Cardio - AI Admin
            </span>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-rose-100 text-rose-700 rounded-xl hover:bg-rose-200 transition-colors font-medium"
          >
            <LogOut className="w-4 h-4" />
            Sair
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('reviews')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'reviews'
                ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-rose-50'
            }`}
          >
            <Star className="w-5 h-5" />
            Avaliações ({reviews.length})
          </button>

          <button
            onClick={() => setActiveTab('contacts')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'contacts'
                ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-rose-50'
            }`}
          >
            <Mail className="w-5 h-5" />
            Contatos ({contacts.length})
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-12 h-12 border-4 border-rose-200 border-t-rose-600 rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="space-y-4">
                {reviews.length === 0 ? (
                  <div className="bg-white rounded-2xl p-12 text-center border border-rose-100">
                    <Star className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">Nenhuma avaliação ainda</p>
                  </div>
                ) : (
                  reviews.map((review) => (
                    <div
                      key={review.id}
                      className="bg-white rounded-2xl p-6 border border-rose-100 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold">
                                {review.name.charAt(0).toUpperCase()}
                              </span>
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900">{review.name}</h3>
                              <div className="flex items-center gap-1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed mb-3">{review.comment}</p>
                          <p className="text-sm text-gray-500">
                            {new Date(review.created_at).toLocaleString('pt-BR')}
                          </p>
                        </div>
                        <button
                          onClick={() => deleteReview(review.id)}
                          className="ml-4 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* Contacts Tab */}
            {activeTab === 'contacts' && (
              <div className="space-y-4">
                {contacts.length === 0 ? (
                  <div className="bg-white rounded-2xl p-12 text-center border border-rose-100">
                    <Mail className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">Nenhum contato ainda</p>
                  </div>
                ) : (
                  contacts.map((contact) => (
                    <div
                      key={contact.id}
                      className="bg-white rounded-2xl p-6 border border-rose-100 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center">
                              <Mail className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900">{contact.name}</h3>
                              <a
                                href={`mailto:${contact.email}`}
                                className="text-sm text-rose-600 hover:underline"
                              >
                                {contact.email}
                              </a>
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed mb-3 whitespace-pre-wrap">
                            {contact.message}
                          </p>
                          <p className="text-sm text-gray-500">
                            {new Date(contact.created_at).toLocaleString('pt-BR')}
                          </p>
                        </div>
                        <button
                          onClick={() => deleteContact(contact.id)}
                          className="ml-4 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
