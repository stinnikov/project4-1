import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const line = '─ ';

const ProductDescription = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
    Наличный расчет: 
      </Text>
      <Text style={styles.list}>
        {line} При самовывозе вы оплачиваете товар в кассе магазина.{'\n'}
        {line} При получении курьерской доставкой курьеру интернет-магазина.{'\n'}
        {line} В подтверждение оплаты мы выдаем вам кассовый чек и товарную накладную.
      </Text>
      <Text style={styles.title}>
      Безналичный (для юридических лиц):
      </Text>
      <Text style={styles.list}>
        {line} После оформления заказа, специалист магазина электронной почтой вышлет Вам товарную накладную и счет на оплату, который Вы сможете оплатить с расчетного счета Вашей организации.{'\n'}
        {line} Для получения заказа необходима доверенность от организации-плательщика, оформленная надлежащим образом и документ, удостоверяющий личность.{'\n'}
        {line} Заказ можно оплатить в кассу магазина при самовывозе.
      </Text>
      <Text style={styles.title}>
      Оплата банковской картой:
      </Text>
      <Text style={styles.list}>
        {line} При самовывозе вы оплачиваете товар в кассе магазина.{'\n'}
        {line} При получении курьерской доставкой курьеру интернет-магазина.{'\n'}
        {line} В подтверждение оплаты мы выдаем вам кассовый чек и товарную накладную.
      </Text>
      <Text style={styles.title}>
      Безналичный (для юридических лиц):
      </Text>
      <Text style={styles.list}>
        {line} При самовывозе вы оплачиваете товар в кассе магазина.{'\n'}
        {line} При получении курьерской доставкой курьеру интернет-магазина.{'\n'}
        {line} В подтверждение оплаты мы выдаем вам кассовый чек и товарную накладную.
      </Text>
      <Text style={styles.description}>
      При оплате банковской картой (ввода реквизитов Вашей карты) Вы будете перенаправлены на платежный шлюз ПАО СБЕРБАНК. Соединение с платежным шлюзом и передача информации осуществляется в защищенном режиме с использованием протокола шифрования SSL. В случае если Ваш банк поддерживает технологию безопасного проведения интернет-платежей Verified By Visa или MasterCard SecureCode для проведения платежа также может потребоваться ввод специального пароля. Настоящий сайт поддерживает 256-битное шифрование. Конфиденциальность сообщаемой персональной информации обеспечивается ПАО СБЕРБАНК. Введенная информация не будет предоставлена третьим лицам за исключением случаев, предусмотренных законодательством РФ. Проведение платежей по банковским картам осуществляется в строгом соответствии с требованиями платежных систем МИР, Visa Int. и MasterCard Europe Sprl.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  title: {
    fontSize: 18,
    padding:8,
    fontWeight: 'bold',
  },
  list: {
    marginLeft:12,
    fontSize: 16,
  },
  description:
  {
    padding:8,
    fontSize:16,
  }
});

export default ProductDescription;