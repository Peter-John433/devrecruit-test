export default function Prop() {
  return (
    <div>
      <h3 className="text-lg lg:text-xl font-bold mt-3 lg:mt-3">Prop</h3>
      <p className="max-md:text-sm lg:leading-[28px]">
        Prop is an external data owned by the parent component, prop is a
        channel in which parent component easily communicate with the child
        component. it's like a function parameter,prop is immutable by the child
        component(readonly).recieving new prop causes the child compoent to
        rerender usually when the parent component is been updated. <br />
        Prop give parent component the ability to configure the child component.
        e.g a prop function passed to child component will only work when the
        child component recieve the prop function, when the prop function is
        updated from the parent component, this will make the child component to
        rerender.
      </p>
    </div>
  );
}
