import React from "react";

export default function GoogleMaps() {
  return (
    <iframe
      title="google-maps"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.2242445780353!2d10.723050677127247!3d59.911825664259254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e8045deec5d%3A0xa9a109a18ab0377b!2sMunkedamsveien%2035%2C%200250%20Oslo!5e0!3m2!1sno!2sno!4v1696972051050!5m2!1sno!2sno"
      style={{ border: 0, width: "100%", height: "100%", borderRadius: "4%" }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
