import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export const isSmallScreen = width < 500;



// تعريف الألوان بناءً على الصورة
const primaryColor = '#60B5FF'; // لون أزرق فاتح للعناصر الرئيسية مثل زر الإضافة
const secondaryColor = '#FF0000'; // لون أحمر فاتح لزر الحذف أو الإلغاء
const backgroundColor = '#f0f3f4'; // لون رمادي فاتح للخلفية العامة
const formBackgroundColor = 'white'; // لون أبيض لخلفية النماذج والقوائم
const textColorPrimary = '#333'; // لون أسود أو رمادي داكن للنصوص الرئيسية
const textColorSecondary = '#777'; // لون رمادي متوسط للنصوص الثانوية أو التوضيحية
const borderColor = '#ddd'; // لون رمادي فاتح للحدود
const buttonPrimary = '#2ecc71'; // لون أخضر فاتح لزر التأكيد أو الحفظ
const buttonSecondary = '#f39c12'; // لون برتقالي فاتح لزر التعديل أو التسجيل
const buttonDisabled = '#bdc3c7'; // لون رمادي باهت للأزرار المعطلة

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: isSmallScreen ? 15 : 20,
    backgroundColor: 'rgb(231, 231, 231)', // استخدام لون الخلفية الجديد
  },





  label: {
    flex: 0.35,
    fontSize: isSmallScreen ? 14 : 16,
    color: textColorSecondary, // استخدام لون النص الثانوي الجديد
  },

  pickerContainer: {
    flex: 0.65,
    borderWidth: 1,
    borderColor: borderColor, // استخدام لون الحدود الجديد
    borderRadius: 4,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
  },
  picker: {
    flex: 1,
    color: textColorPrimary, // استخدام لون النص الرئيسي الجديد
    fontSize: isSmallScreen ? 14 : 16,
  },
  pickerClearButton: {
    paddingHorizontal: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: isSmallScreen ? 10 : 15,
  },

  
  lignesContainer: {
    backgroundColor: formBackgroundColor, // استخدام لون خلفية النموذج الجديد
    padding: isSmallScreen ? 12 : 15,
    borderRadius: 8,
    marginBottom: isSmallScreen ? 15 : 20,
  },
  lignesTitre: {
    fontSize: isSmallScreen ? 16 : 18,
    fontWeight: 'bold',
    marginBottom: isSmallScreen ? 8 : 10,
    color: textColorPrimary, // استخدام لون النص الرئيسي الجديد
  },







  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },



  // يمكنك إضافة أنماط إضافية هنا لتتناسب مع ألوان الأيقونات أو العناصر الأخرى في الصورة

});