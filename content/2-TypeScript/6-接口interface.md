# 接口 interface

```typescript
interface Person {
  firstName: string;
  lastName: string;
  say(): string;
}

const man: Person = {
  firstName: 'mike',
  lastName: 'jojo',
  say() {
    return 'i am jojo'
  }
}
```

- #### 接口 和 类型别名的区别

类型别名可以直接给类型，比如string，而接口必须代表对象

```typescript
type a = string;
interface b {
  c: string;
  d?: number;
}
```

- #### 接口对象的属性名类型注释

```typescript
// 属性名是string，属性值是any
interface pp {
  [propNmae: stirng]: any
}
```

- #### 接口和类的约束

```typescript
interface Person {
  firstName: string;
  lastName: string;
  say(): string;
}

class woman implements Person {
  firstName: 'sara',
  lastName: 'koko',
  say() {
    return 'i am koko'
  }
}
```

- #### 接口间的继承

```typescript
interface Teacher extends Person {
  teach(): string
}

const teacher: Teacher = {
  firstName: 'tete',
  lastName: 'chch',
  teach() {
    return 'i am a teacher'
  }
}
```

