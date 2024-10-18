## Một số quy tắc khi sử dụng JSX
##### 1. JSX có thể sử dụng bên trong một JSX khác như syntax HTML

Ví dụ:

```ts
const ComponentsScreen: React.FC = () => {
    return <View>
        <Text style={styles.textStyle}>This is ComponentsScreen</Text>
    </View>
}

```
Trên ví dụ này, `View` element đang chứa `Text` element.
##### 2. Chúng ta điều chỉnh JSX thông qua props
##### 3. Chúng ta sử dụng variables bên trong JSX bằng dấu ngoặc nhọn.

Ví dụ:

```ts
const ComponentsScreen: React.FC = () => {
    const greeting = 'Hi there!';
    return <View>
        <Text style={styles.textStyle}>This is ComponentsScreen</Text>
        <Text>{greeting}</Text>
    </View>
}
```

Biến `greeting` để sử dụng trong `Text` element cần phải bọc nó trong dấu `{greeting}`.

Ngoại lệ ở đây là chúng ta không thể hiển thị một `object` bên trong JSX.

```tsx
const ComponentsScreen: React.FC = () => {
    const color = {
        color: 'red'
    };
    return <View>
        <Text style={styles.textStyle}>This is ComponentsScreen</Text>
        <Text>{color}</Text>
    </View>
}
```

Đoạn code trên sẽ gây ra lỗi.

##### 4. Chúng ta có thể gán JSX vào một variable, sau đó hiển thị variable đó bên trong một block.

```tsx
const ComponentsScreen: React.FC = () => {
    const greeting = <Text>Hi there</Text>;
    return <View>
        <Text style={styles.textStyle}>This is ComponentsScreen</Text>
        {greeting}
    </View>
}
```