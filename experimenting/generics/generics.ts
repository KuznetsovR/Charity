// function identity<T>(val: T): T {
//     return val
// }

// identity<string>("123")

// interface GenericInterface<U> {
//     value: U
//     getIdentity: () => U
// }

// class GenericClass<T> implements GenericInterface<T>{
//     value: T
//     constructor(value) {
//         this.value = value
//     }
//     getIdentity(): T {
//         return this.value
//     }
// }

// const newVar = new GenericClass<string>("123321")
// newVar.getIdentity()

class Car {
    label: string = 'Generic Car'
    numWheels: Number = 4
    horn() {
        return "beep beep!"
    }
}

class Truck extends Car {
    label = 'Truck'
    numWheels = 18
}

class Vespa extends Car {
    label = 'Vespa'
    numWheels = 2
}
function washCar<T extends Car>(car: T): T {
    return car
}
const truck = new Truck()
washCar<Truck>(truck)