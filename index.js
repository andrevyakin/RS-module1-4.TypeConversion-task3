console.log(`Преобразование "console.log" к String: ${String(console.log)}, к Number ${Number(console.log)}, к Boolean ${Boolean(console.log)}`);
console.log(`Преобразование "{ name: 'Maxim' }" к String: ${String({ name: 'Maxim' })}, к Number ${Number({ name: 'Maxim' })}, к Boolean ${Boolean({ name: 'Maxim' })}`);
console.log(`Преобразование "Symbol('key')" к String: ${String(Symbol('key'))}, к Number нельзя - ошибка, к Boolean ${Boolean(Symbol('key'))}`);
console.log(`Преобразование "Number" к String: ${String(Number)}, к Number ${Number(Number)}, к Boolean ${Boolean(Number)}`);
console.log(`Преобразование "''" к String: ${String('')}, к Number ${Number('')}, к Boolean ${Boolean('')}`);
console.log(`Преобразование "0" к String: ${String(0)}, к Number ${Number(0)}, к Boolean ${Boolean(0)}`);
console.log(`Преобразование "-10" к String: ${String(-10)}, к Number ${Number(-10)}, к Boolean ${Boolean(-10)}`);
console.log(`Преобразование "'-105'" к String: ${String('-105')}, к Number ${Number('-105')}, к Boolean ${Boolean('-105')}`);
