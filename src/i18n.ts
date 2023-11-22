// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      EN: {
        translation: {
          heroTitle: 'Discover the Art of Cooking',
          heroPara:'Elevate your culinary skills with our curated collection of simple, delicious recipes that turn every meal into a masterpiece.',
          Heading:'Our Recipies',
          Home:'Home',
          Checkout:'Checkout',
          Recipie:'Recipe',
          Login:'Login',
          Previous:'Previous',
          Next:'Next',
          Dessert:'Dessert',
          Chicken:'Chicken',
          Starter:'Starter',
          Seafood:'Seafood',
          Pasta:'Pasta',
          Vegetarian:'Vegetarian',
          Miscellaneous:'Miscellaneous',
          Side:'Side',
          Beef:'Beef',
          Pork:'Pork',
          All:'All',
          ChooseCategory:'Choose Category'
        },
      },
      JA: {
        translation: {
          heroTitle: '料理の芸術を発見する',
          heroPara:'あらゆる食事を傑作に変える、シンプルでおいしいレシピの厳選されたコレクションで料理のスキルを高めましょう。',
          Heading:'私たちのレシピ',
          Home:'家',
          Checkout:'チェックアウト',
          Recipie:'レシピ',
          Login:'ログイン',
          Previous:'前の',
          Next:'次',
          Dessert:'デザート',
          Chicken:'チキン',
          Starter:'スターター',
          Seafood:'シーフード',
          Pasta:'パスタ',
          Vegetarian:'ベジタリアン',
          Miscellaneous:'その他',
          Side:'側',
          Beef:'牛肉',
          Pork:'豚肉',
          All:'全て',
          ChooseCategory:'カテゴリを選択してください'
        },
      },
    },
    lng: 'EN', // default language
    fallbackLng: 'EN',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
