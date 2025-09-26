import React, { useState } from 'react';
import { 
  ShoppingCart, ArrowLeft, Plus, Minus, Trash2, CreditCard, MapPin, 
  Phone, User, Mail, Lock, Shield, CheckCircle 
} from 'lucide-react';

const CampusCartCheckout = () => {
  const [currentStep, setCurrentStep] = useState('cart'); // 'cart', 'shipping', 'payment', 'confirmation'
  const [paymentMethod, setPaymentMethod] = useState('card');

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "MacBook Pro 13-inch",
      description: "Excellent condition, barely used",
      price: 850,
      quantity: 1,
      seller: "John Doe",
      mainImage: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=200&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=60&h=40&fit=crop",
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=60&h=40&fit=crop",
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=60&h=40&fit=crop"
      ]
    },
    {
      id: 2,
      name: "Calculus Textbook",
      description: "Stewart's Calculus 8th Edition",
      price: 120,
      quantity: 2,
      seller: "Jane Smith",
      mainImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=200&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=60&h=40&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=40&fit=crop",
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=60&h=40&fit=crop"
      ]
    },
    {
      id: 3,
      name: "Gaming Headset",
      description: "SteelSeries Arctis 7 wireless",
      price: 75,
      quantity: 1,
      seller: "Mike Johnson",
      mainImage: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=300&h=200&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=60&h=40&fit=crop",
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=60&h=40&fit=crop",
        "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?w=60&h=40&fit=crop"
      ]
    }
  ]);

  const [shippingInfo, setShippingInfo] = useState({
    fullName: '', email: '', phone: '', address: '', city: '', state: '', zipCode: '', campus: ''
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '', expiryDate: '', cvv: '', cardName: ''
  });

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const shipping = 15;
  const total = subtotal + tax + shipping;

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev => prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id) => setCartItems(prev => prev.filter(item => item.id !== id));

  const handleShippingSubmit = (e) => { e.preventDefault(); setCurrentStep('payment'); };
  const handlePaymentSubmit = (e) => { e.preventDefault(); setCurrentStep('confirmation'); };

  const CartStep = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <ShoppingCart className="w-6 h-6 mr-3 text-orange-500" />
            Shopping Cart ({cartItems.length} items)
          </h2>
          {cartItems.length > 0 ? (
            <div className="space-y-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                  <div className="w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={item.mainImage} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900">{item.name}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                        <p className="text-orange-600 text-sm font-medium">Seller: {item.seller}</p>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700 p-1">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex gap-2 mb-3">
                      {item.additionalImages.map((img, i) => (
                        <div key={i} className="w-12 h-8 rounded overflow-hidden">
                          <img src={img} alt={`view ${i+1}`} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-medium text-gray-900 min-w-[20px] text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-orange-500">₹{item.price * item.quantity}</div>
                        <div className="text-sm text-gray-500">₹{item.price} each</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-600 mb-6">Add some items to get started!</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg">Continue Shopping</button>
            </div>
          )}
        </div>
      </div>
      <div className="lg:col-span-1">
        <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span><span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600"><span>Tax</span><span>₹{tax.toFixed(2)}</span></div>
            <div className="flex justify-between text-gray-600"><span>Shipping</span><span>₹{shipping.toFixed(2)}</span></div>
            <div className="border-t pt-3">
              <div className="flex justify-between text-xl font-bold text-gray-900">
                <span>Total</span><span>₹{total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          {cartItems.length > 0 && (
            <button onClick={() => setCurrentStep('shipping')} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors">
              Proceed to Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const ShippingStep = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Shipping Form */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <MapPin className="w-6 h-6 mr-3 text-orange-500" /> Shipping Information
          </h2>
          <form onSubmit={handleShippingSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input type="text" required value={shippingInfo.fullName} onChange={(e) => setShippingInfo({...shippingInfo, fullName: e.target.value})} placeholder="Enter your full name" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input type="email" required value={shippingInfo.email} onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})} placeholder="Enter your email" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input type="tel" required value={shippingInfo.phone} onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})} placeholder="Enter your phone number" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Campus</label>
                <select required value={shippingInfo.campus} onChange={(e) => setShippingInfo({...shippingInfo, campus: e.target.value})} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none">
                  <option value="">Select your campus</option>
                  <option value="north">North Campus</option>
                  <option value="south">South Campus</option>
                  <option value="east">East Campus</option>
                  <option value="west">West Campus</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <input type="text" required value={shippingInfo.address} onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})} placeholder="Enter your address" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input type="text" required placeholder="City" value={shippingInfo.city} onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
              <input type="text" required placeholder="State" value={shippingInfo.state} onChange={(e) => setShippingInfo({...shippingInfo, state: e.target.value})} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
              <input type="text" required placeholder="ZIP" value={shippingInfo.zipCode} onChange={(e) => setShippingInfo({...shippingInfo, zipCode: e.target.value})} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
            </div>
            <div className="flex gap-4 pt-4">
              <button type="button" onClick={() => setCurrentStep('cart')} className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold transition-colors">Back to Cart</button>
              <button type="submit" className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors">Continue to Payment</button>
            </div>
          </form>
        </div>
      </div>
      {/* Order Summary */}
      <div className="lg:col-span-1">
        <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
          <div className="space-y-3 mb-6">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-gray-600">{item.name} x{item.quantity}</span>
                <span className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t pt-3">
              <div className="flex justify-between text-xl font-bold text-gray-900">
                <span>Total</span><span>₹{total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PaymentStep = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CreditCard className="w-6 h-6 mr-3 text-orange-500" /> Payment Information
          </h2>
          {/* Payment method selection */}
          <div className="mb-6">
            <div className="flex space-x-4">
              <button onClick={() => setPaymentMethod('card')} className={`flex-1 p-4 border rounded-lg transition-colors ${paymentMethod === 'card' ? 'border-orange-500 bg-orange-50 text-orange-700' : 'border-gray-200 hover:border-gray-300'}`}>
                <CreditCard className="w-6 h-6 mx-auto mb-2" /> Credit/Debit Card
              </button>
              <button onClick={() => setPaymentMethod('campus')} className={`flex-1 p-4 border rounded-lg transition-colors ${paymentMethod === 'campus' ? 'border-orange-500 bg-orange-50 text-orange-700' : 'border-gray-200 hover:border-gray-300'}`}>
                <Shield className="w-6 h-6 mx-auto mb-2" /> Campus Cash
              </button>
            </div>
          </div>
          <form onSubmit={handlePaymentSubmit} className="space-y-4">
            {paymentMethod === 'card' ? (
              <>
                <input type="text" required placeholder="Card Number" value={paymentInfo.cardNumber} onChange={(e) => setPaymentInfo({...paymentInfo, cardNumber: e.target.value})} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" required placeholder="Expiry Date" value={paymentInfo.expiryDate} onChange={(e) => setPaymentInfo({...paymentInfo, expiryDate: e.target.value})} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
                  <input type="text" required placeholder="CVV" value={paymentInfo.cvv} onChange={(e) => setPaymentInfo({...paymentInfo, cvv: e.target.value})} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
                </div>
                <input type="text" required placeholder="Name on Card" value={paymentInfo.cardName} onChange={(e) => setPaymentInfo({...paymentInfo, cardName: e.target.value})} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
              </>
            ) : (
              <p className="text-gray-700">You will be charged using your campus cash balance.</p>
            )}
            <div className="flex gap-4 pt-4">
              <button type="button" onClick={() => setCurrentStep('shipping')} className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold transition-colors">Back</button>
              <button type="submit" className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors">Pay ₹{total.toFixed(2)}</button>
            </div>
          </form>
        </div>
      </div>
      {/* Order Summary */}
      <div className="lg:col-span-1">
        <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
          <div className="space-y-3 mb-6">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-gray-600">{item.name} x{item.quantity}</span>
                <span className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t pt-3">
              <div className="flex justify-between text-xl font-bold text-gray-900">
                <span>Total</span><span>₹{total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ConfirmationStep = () => (
    <div className="text-center py-20">
      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
      <p className="text-gray-600 mb-6">Thank you for your purchase. Your items will be delivered to your campus soon.</p>
      <button onClick={() => setCurrentStep('cart')} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold">Back to Shopping</button>
    </div>
  );

  const steps = ['cart', 'shipping', 'payment'];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      {/* Progress Steps */}
      {currentStep !== 'confirmation' && (
        <div className="hidden md:flex items-center justify-center space-x-4 mb-10">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                currentStep === step 
                  ? 'bg-orange-500 text-white' 
                  : index < steps.indexOf(currentStep)
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-600'
              }`}>
                {index < steps.indexOf(currentStep) ? <CheckCircle className="w-4 h-4" /> : index + 1}
              </div>
              {index < steps.length - 1 && <div className="w-8 h-0.5 bg-gray-300 mx-2"></div>}
            </div>
          ))}
        </div>
      )}
      {/* Step Components */}
      {currentStep === 'cart' && <CartStep />}
      {currentStep === 'shipping' && <ShippingStep />}
      {currentStep === 'payment' && <PaymentStep />}
      {currentStep === 'confirmation' && <ConfirmationStep />}
    </div>
  );
};

export default CampusCartCheckout;
